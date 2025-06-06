import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                {/* side nav */}
                <div className='col-span-3'>
                    <ul>
                        <li>user1</li>
                        <li>user2</li>
                        <li>user3</li>
                    </ul>
                </div>
                <div className='col-span-9'>
                   {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;