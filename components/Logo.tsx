export default function Logo() {
    return (
        <div className='flex items-center gap-2 px-4 md:px-0'>
            <img src='./logo.png' className='h-10 object-contain  ' />

            <div className='flex flex-col items-start'>
                <h4 className=' brand m-0 text-center font-bold leading-none'>Carbon</h4>
                <h4 className='brand mt-0  font-medium leading-none'>Cell</h4>
            </div>
        </div>
    );
}
