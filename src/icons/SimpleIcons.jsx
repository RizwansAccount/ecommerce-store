const CartIcon =({color = "#2D58C8", counter, onClick})=> {
    return (
        <div className="relative">
            <span className="absolute left-[12px] bottom-[32px] bg-primary text-white text-[12px] h-[20px] w-[20px] flex items-center justify-center rounded-full">
                {counter}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" onClick={onClick} style={{cursor:'pointer'}}>
                <path d="M3.06164 14.4968L3.42688 12.354C3.85856 9.82137 4.0744 8.55505 4.92914 7.80529C5.78389 7.05554 7.01171 7.05554 9.46734 7.05554H14.5327C16.9883 7.05554 18.2161 7.05554 19.0709 7.80529C19.9256 8.55505 20.1414 9.82137 20.5731 12.354L20.9384 14.4968C21.5357 18.0015 21.8344 19.7538 20.9147 20.9046C19.995 22.0555 18.2959 22.0555 14.8979 22.0555H9.1021C5.70406 22.0555 4.00504 22.0555 3.08533 20.9046C2.16562 19.7538 2.4643 18.0015 3.06164 14.4968Z" stroke={color} stroke-width="1.4"/>
                <path d="M7.5 9.05554L7.71501 6.04537C7.87559 3.7973 9.7462 2.05554 12 2.05554C14.2538 2.05554 16.1244 3.7973 16.285 6.04537L16.5 9.05554" stroke={color} stroke-width="1.4" stroke-linecap="round"/>
            </svg>
        </div>
    )
};
const HomeIcon =({color = "#333333", onClick})=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" onClick={onClick} style={{cursor:'pointer'}}>
        <path d="M8.24945 20.2222L8.01971 17.0057C7.89619 15.2764 9.26582 13.8055 10.9994 13.8055C12.7331 13.8055 14.1027 15.2764 13.9792 17.0057L13.7494 20.2222" stroke={color} stroke-width="1.4"/>
        <path d="M2.1556 12.1679C1.832 10.0621 1.6702 9.00921 2.06832 8.07582C2.46643 7.14241 3.34969 6.50378 5.11621 5.22652L6.43607 4.27222C8.6336 2.68333 9.73239 1.88889 11.0001 1.88889C12.268 1.88889 13.3667 2.68333 15.5642 4.27222L16.8841 5.22652C18.6506 6.50378 19.5339 7.14241 19.9321 8.07582C20.3302 9.00921 20.1684 10.0621 19.8447 12.1679L19.5688 13.9636C19.1101 16.9487 18.8806 18.4413 17.8101 19.3318C16.7395 20.2222 15.1744 20.2222 12.044 20.2222H9.95624C6.82597 20.2222 5.26083 20.2222 4.19025 19.3318C3.11966 18.4413 2.89029 16.9487 2.43156 13.9636L2.1556 12.1679Z" stroke={color} stroke-width="1.4" stroke-linejoin="round"/>
    </svg>
);

const AddIcon =({color = "#989898", onClick}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={onClick}>
    <path d="M6.99997 3.11111V10.8889M10.8889 7H3.11108" stroke={color} stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)

const MinusIcon =({color = "#989898", onClick}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={onClick} > 
        <path d="M11 7H3" stroke={color} stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)
const CrossIcon =({color = "#FFFFFF", onClick}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={color}fill="none" onClick={onClick}>
        <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const AppLogo =({className, onClick}) => (
<>
    <img src="app_logo.png" className={`${className} w-[120px] cursor-pointer`} onClick={onClick} />
</>
)

export { CartIcon, AppLogo, HomeIcon, AddIcon, MinusIcon, CrossIcon };