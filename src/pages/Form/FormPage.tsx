
import AddCourses from '@/components/form/Form';
import React, { useState } from 'react';

interface FormData {
    title: string;
    description: string;
    // Add other form fields as needed
}

const FormPage: React.FC = () => {

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
          <AddCourses />
        </div>
    );
};

export default FormPage;