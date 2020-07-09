import React from 'react';

const MilkteaComponent = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<img
				alt='milktea'
				src='https://i.pinimg.com/originals/7e/44/aa/7e44aa732691c034a8300a2670966898.jpg'
				style={{ marginTop: '50px' }}
			/>
			<p style={{ color: '#fff' }}>sabi ko na milktea</p>
		</div>
	);
};

export default MilkteaComponent;
