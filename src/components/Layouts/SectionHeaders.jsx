/* eslint-disable react/prop-types */


const SectionHeaders = ({title, coloredTitle}) => {
    return (
        <div className='flex flex-col justify-center items-center mt-8 mb-8 border-b-2 pb-4 w-fit mx-auto px-6 border-[#800020]'>
            <h1 className="text-3xl font-bold">{title}
                <span className="text-[#800020]">{coloredTitle}</span>
            </h1>
        </div>
    );
};

export default SectionHeaders;