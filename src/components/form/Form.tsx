import React, { useState } from 'react';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import axios from 'axios';

const AddCourses: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lecturesno, setLecturesNo] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [iname, setIName] = useState<string>('');
  const [startHour, setStartHour] = useState<Date>(new Date());
  const [endHour, setEndHour] = useState<Date>(new Date());

  const handleSubmit = () => {
    if (!name || lecturesno === 0 || duration === 0 || !iname) {
      toast({
        title: 'Error',
        description: 'Please enter all values!',
        variant: 'destructive',
      });
      return;
    }

    const body = {
      name,
      lectureno: lecturesno,
      duration,
      instructor_name: iname,
      start_hr: startHour.getHours(),
      end_hr: endHour.getHours(),
    };

    axios
      .post('http://localhost:8000/add-course', body)
      .then(() => {
        toast({
          title: 'Success',
          description: 'Course registered successfully!',
        });

        // Reset form
        setName('');
        setDuration(0);
        setLecturesNo(0);
        setIName('');
        setStartHour(new Date());
        setEndHour(new Date());
      })
      .catch((e) => {
        toast({
          title: 'Error',
          description: 'Failed to add course',
          variant: 'destructive',
        });
        console.error(e);
      });
  };

  return (
    <div className='container mx-auto max-w-md p-4'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center text-2xl font-bold'>Course Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name of Course</Label>
              <Input
                id='name'
                placeholder='Enter course name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='lecturesno'>Number of Lectures</Label>
                <Input
                  id='lecturesno'
                  type='number'
                  placeholder='Lectures per week'
                  value={lecturesno}
                  onChange={(e) => setLecturesNo(Number(e.target.value))}
                  required
                />
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='duration'>Duration of Lecture</Label>
                <Input
                  id='duration'
                  type='number'
                  placeholder='Hours'
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='iname'>Name of Instructor</Label>
              <Input
                id='iname'
                placeholder='Enter instructor name'
                value={iname}
                onChange={(e) => setIName(e.target.value)}
                required
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label>Start Hour</Label>
                <Input
                  type='time'
                  value={format(startHour, 'HH:mm')}
                  onChange={(e) => {
                    const [hours, minutes] = e.target.value.split(':').map(Number);
                    const newDate = new Date();
                    newDate.setHours(hours);
                    newDate.setMinutes(minutes);
                    setStartHour(newDate);
                  }}
                />
              </div>

              <div className='grid gap-2'>
                <Label>End Hour</Label>
                <Input
                  type='time'
                  value={format(endHour, 'HH:mm')}
                  onChange={(e) => {
                    const [hours, minutes] = e.target.value.split(':').map(Number);
                    const newDate = new Date();
                    newDate.setHours(hours);
                    newDate.setMinutes(minutes);
                    setEndHour(newDate);
                  }}
                />
              </div>
            </div>

            <Button onClick={handleSubmit} className='w-full'>
              <PlusCircle className='mr-2 h-4 w-4' />
              Add Course
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCourses;
