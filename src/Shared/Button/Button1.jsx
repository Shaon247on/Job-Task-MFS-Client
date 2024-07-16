const Button1 = ({text, func, icon}) => {
    return (
        <button onClick={func} className='px-7 py-3 animation-hover rounded-xl font-semibold text-white'>
            {text} {icon}
        </button>
    );
};

export default Button1;