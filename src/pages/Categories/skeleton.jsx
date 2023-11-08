import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => {
    return (
        <ContentLoader
            speed={2}
            width="100%" // Mengatur lebar komponen menjadi 100% untuk responsif
            height={80}
            viewBox="0 0 100% 80" // Sesuaikan sesuai dengan lebar komponen
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            {...props}
        >
            <rect x="5%" y="6" rx="4" ry="4" width="90%" height="38" /> // Gunakan persentase untuk mengatur lebar elemen
            <rect x="5%" y="55" rx="4" ry="4" width="90%" height="38" />
            <rect x="5%" y="104" rx="4" ry="4" width="90%" height="38" />
        </ContentLoader>
    );
};

Skeleton.metadata = {
    name: 'Abraham Calsin',
    github: 'abrahamcalsin',
    description: 'Loading a list of tasks.',
    filename: 'TaskList',
};

export default Skeleton;
