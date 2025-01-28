
const Container = ({children}) => {
    return (
        <div className='max-w-screen-xl w-[98%] md:w-[90%]  mx-auto'>
            {children}
        </div>
    );
};

export default Container;