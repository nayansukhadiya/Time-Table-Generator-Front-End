import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const TIME_SLOTS = [
  '7:00-8:00',
  '8:00-9:00',
  '9:00-10:00',
  '10:00-11:00 (Break)',
  '1:00-2:00',
  '2:00-3:00',
  '3:00-4:00',
  '4:00-5:00',
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const COURSES = [
  'Mathematics',
  'Physics',
  'Computer Science',
  'Biology',
  'English',
  'Chemistry',
  'History',
  'Economics',
];
const INSTRUCTORS = [
  'Dr. Smith',
  'Prof. Johnson',
  'Dr. Williams',
  'Prof. Brown',
  'Dr. Davis',
  'Prof. Miller',
  'Dr. Allen',
  'Prof. White',
];
const ROOMS = ['A101', 'B205', 'C302', 'D401', 'E502', 'F603', 'G701', 'H802'];

// Define TypeScript interfaces
interface ClassInfo {
  course: string;
  instructor: string;
  room: string;
}

type TimeSlotData = ClassInfo | 'Break';

interface DailySchedule {
  [day: string]: TimeSlotData[];
}

const generateTimetable = (): DailySchedule => {
  let timetable: DailySchedule = {};
  DAYS.forEach((day) => {
    timetable[day] = TIME_SLOTS.map((slot, index) =>
      slot.includes('Break')
        ? 'Break'
        : {
            course: COURSES[index % COURSES.length],
            instructor: INSTRUCTORS[index % INSTRUCTORS.length],
            room: ROOMS[index % ROOMS.length],
          },
    );
  });
  return timetable;
};

const ViewTimeTable = () => {
  const [data, setData] = useState<DailySchedule>({});
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleGenerate = () => {
    setClicked(true);
    setLoading(true);
    setTimeout(() => {
      setData(generateTimetable());
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='flex min-h-screen items-center justify-center p-4'>
      <Card className='w-full max-w-6xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Weekly Time Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col space-y-4'>
            <Button onClick={handleGenerate} disabled={loading} className='w-full'>
              {loading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Generating Timetable...
                </>
              ) : (
                'Generate Time Table'
              )}
            </Button>

            {clicked && loading && (
              <div className='flex justify-center items-center'>
                <Loader2 className='h-8 w-8 animate-spin text-primary' />
              </div>
            )}

            {clicked && !loading && (
              <div className='border rounded-lg overflow-auto'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-[120px]'>Time</TableHead>
                      {DAYS.map((day) => (
                        <TableHead key={day}>{day}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {TIME_SLOTS.map((slot, index) => (
                      <TableRow key={slot}>
                        <TableCell className='font-medium'>{slot}</TableCell>
                        {DAYS.map((day) => (
                          <TableCell key={`${day}-${slot}`}>
                            {data[day]?.[index] === 'Break' ? (
                              <span className='text-red-500 font-bold'>Break</span>
                            ) : (
                              <div>
                                <strong>{data[day]?.[index]?.course}</strong>
                                <br />
                                <small>
                                  {data[day]?.[index]?.instructor} ({data[day]?.[index]?.room})
                                </small>
                              </div>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewTimeTable;
