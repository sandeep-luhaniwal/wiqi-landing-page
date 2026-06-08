
import React from "react";

export interface ICONS_PROPS extends React.SVGProps<SVGSVGElement> {
    icon: string;
    className?: string;
}


const Icons = ({ icon, className, ...props }: ICONS_PROPS) => {
    const iconsList: Record<string, React.ReactElement> = {
        "menu": (
            <svg className="w-8 sm:h-10 sm:w-10 h-8" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" stroke="#29303D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6h10M4 12h16M7 12h13M4 18h10" />
            </svg>
        ),
        "cross": (
            <svg className={`${className} w-8 sm:h-10 sm:w-10 h-8`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15">
                <path fill="#29303D" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" />
            </svg>
        ),
        "arrownext": (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                <path fill="#4A5565" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
            </svg>
        ),
        "sliderarrow": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 6L15.5 12L9.5 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        ),
        "play": (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2.5L16.6667 10L5 17.5V2.5Z" fill="white" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "instagram": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={className} d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path className={className} d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z" stroke="black" strokeWidth="1.5" />
                <path className={className} d="M17.5 6.51002L17.51 6.49902" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "tiktok": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={className} d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path className={className} d="M10 12C9.40666 12 8.82664 12.1759 8.33329 12.5056C7.83994 12.8352 7.45543 13.3038 7.22836 13.8519C7.0013 14.4001 6.94189 15.0033 7.05765 15.5853C7.1734 16.1672 7.45912 16.7018 7.87868 17.1213C8.29824 17.5409 8.83279 17.8266 9.41473 17.9424C9.99667 18.0581 10.5999 17.9987 11.1481 17.7716C11.6962 17.5446 12.1648 17.1601 12.4944 16.6667C12.8241 16.1734 13 15.5933 13 15V6C13.333 7 14.6 9 17 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "facebook": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={className} d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path className={className} d="M11 21V12C11 9.813 11.5 8 15 8M9 13H15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "twitter": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={className} d="M13.0809 10.712L8.29489 4.002C8.23939 3.92404 8.16604 3.86049 8.08098 3.81666C7.99591 3.77282 7.90159 3.74996 7.8059 3.75H5.2799C5.1698 3.75014 5.06186 3.78057 4.9679 3.83797C4.87394 3.89536 4.79759 3.9775 4.7472 4.07539C4.69681 4.17328 4.67432 4.28315 4.6822 4.39296C4.69009 4.50278 4.72804 4.60831 4.79189 4.698L10.9189 13.288M13.0809 10.712L19.2079 19.302C19.2718 19.3917 19.3097 19.4972 19.3176 19.607C19.3255 19.7169 19.303 19.8267 19.2526 19.9246C19.2022 20.0225 19.1258 20.1046 19.0319 20.162C18.9379 20.2194 18.83 20.2499 18.7199 20.25H16.1939C16.0982 20.25 16.0039 20.2272 15.9188 20.1833C15.8337 20.1395 15.7604 20.076 15.7049 19.998L10.9189 13.288M13.0809 10.712L18.9229 3.75M10.9189 13.288L5.0769 20.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "mail": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.35742 7.714L9.33742 12.368C10.3004 13.009 10.7814 13.33 11.3014 13.455C11.7614 13.565 12.2404 13.565 12.6994 13.455C13.2194 13.33 13.7004 13.009 14.6634 12.368L21.6434 7.714M7.15742 19.5H16.8434C18.5234 19.5 19.3634 19.5 20.0054 19.173C20.5695 18.8852 21.0281 18.4263 21.3154 17.862C21.6434 17.22 21.6434 16.38 21.6434 14.7V9.3C21.6434 7.62 21.6434 6.78 21.3164 6.138C21.0288 5.57354 20.5699 5.11462 20.0054 4.827C19.3634 4.5 18.5234 4.5 16.8434 4.5H7.15742C5.47742 4.5 4.63742 4.5 3.99542 4.827C3.43133 5.11479 2.97278 5.57369 2.68542 6.138C2.35742 6.78 2.35742 7.62 2.35742 9.3V14.7C2.35742 16.38 2.35742 17.22 2.68442 17.862C2.97204 18.4265 3.43096 18.8854 3.99542 19.173C4.63742 19.5 5.47742 19.5 7.15742 19.5Z" stroke="#29303D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "location": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.40048 4.75953C7.8908 3.29902 9.89728 2.48566 11.9839 2.49619C14.0705 2.50673 16.0687 3.34032 17.5442 4.81581C19.0197 6.2913 19.8533 8.28946 19.8638 10.3761C19.8744 12.4627 19.061 14.4692 17.6005 15.9595L13.4145 20.1455C13.0394 20.5205 12.5308 20.7311 12.0005 20.7311C11.4702 20.7311 10.9615 20.5205 10.5865 20.1455L6.40048 15.9595C4.91537 14.4743 4.08105 12.4599 4.08105 10.3595C4.08105 8.25915 4.91537 6.24479 6.40048 4.75953Z" stroke="#29303D" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 13.3594C13.6569 13.3594 15 12.0162 15 10.3594C15 8.70252 13.6569 7.35938 12 7.35938C10.3431 7.35938 9 8.70252 9 10.3594C9 12.0162 10.3431 13.3594 12 13.3594Z" stroke="#29303D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "chat": (
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.61936 22.4956C11.0036 23.7186 13.7462 24.0499 16.3531 23.4297C18.9599 22.8095 21.2595 21.2786 22.8376 19.1129C24.4156 16.9473 25.1682 14.2892 24.9597 11.6177C24.7513 8.94617 23.5956 6.43696 21.7008 4.54219C19.8061 2.64742 17.2968 1.49169 14.6254 1.28328C11.9539 1.07487 9.29577 1.82747 7.13008 3.40547C4.96438 4.98348 3.43351 7.2831 2.81331 9.88995C2.19312 12.4968 2.52439 15.2395 3.74744 17.6237L1.24902 24.994L8.61936 22.4956Z" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "discover": (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2876 9.69391L18.0341 16.4534C17.9114 16.8214 17.7048 17.1558 17.4305 17.43C17.1562 17.7043 16.8218 17.911 16.4538 18.0336L9.69434 20.2872L11.9479 13.5277C12.0706 13.1597 12.2772 12.8254 12.5515 12.5511C12.8258 12.2768 13.1602 12.0701 13.5282 11.9475L20.2876 9.69391Z" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.9901 27.4826C21.8893 27.4826 27.4822 21.8897 27.4822 14.9905C27.4822 8.09131 21.8893 2.49841 14.9901 2.49841C8.09095 2.49841 2.49805 8.09131 2.49805 14.9905C2.49805 21.8897 8.09095 27.4826 14.9901 27.4826Z" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "game": (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49512 13.7413H12.492" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.99414 11.2429V16.2398" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.7383 14.9905H18.7516" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.4854 12.4922H22.4987" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.6359 6.24603H8.34435C7.10798 6.24632 5.91562 6.70496 4.99776 7.5333C4.0799 8.36163 3.50172 9.50084 3.37499 10.7307C3.3675 10.7957 3.3625 10.8569 3.35376 10.9206C3.25257 11.7625 2.49805 18.0586 2.49805 19.9873C2.49805 20.9813 2.89289 21.9345 3.5957 22.6373C4.29852 23.3401 5.25174 23.735 6.24568 23.735C7.49488 23.735 8.11949 23.1104 8.74409 22.4858L10.5105 20.7194C10.9789 20.2508 11.6143 19.9875 12.2769 19.9873H17.7034C18.366 19.9875 19.0014 20.2508 19.4698 20.7194L21.2362 22.4858C21.8608 23.1104 22.4854 23.735 23.7346 23.735C24.7285 23.735 25.6818 23.3401 26.3846 22.6373C27.0874 21.9345 27.4822 20.9813 27.4822 19.9873C27.4822 18.0573 26.7277 11.7625 26.6265 10.9206C26.6178 10.8581 26.6128 10.7957 26.6053 10.7319C26.4789 9.50186 25.9008 8.36235 24.9829 7.53376C24.065 6.70517 22.8725 6.24635 21.6359 6.24603Z" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        ),
        "star": (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4131 19.3628C12.3015 18.9305 12.0762 18.536 11.7605 18.2203C11.4448 17.9046 11.0503 17.6792 10.618 17.5677L2.95406 15.5914C2.8233 15.5543 2.70822 15.4756 2.62628 15.3671C2.54434 15.2587 2.5 15.1265 2.5 14.9906C2.5 14.8547 2.54434 14.7224 2.62628 14.614C2.70822 14.5056 2.8233 14.4268 2.95406 14.3897L10.618 12.4122C11.0501 12.3008 11.4445 12.0756 11.7602 11.7602C12.0759 11.4447 12.3013 11.0504 12.4131 10.6183L14.3893 2.95444C14.4261 2.82317 14.5047 2.70752 14.6133 2.62514C14.7219 2.54276 14.8545 2.49817 14.9908 2.49817C15.1271 2.49817 15.2597 2.54276 15.3683 2.62514C15.4769 2.70752 15.5556 2.82317 15.5923 2.95444L17.5673 10.6183C17.6788 11.0507 17.9042 11.4452 18.2199 11.7609C18.5356 12.0766 18.9301 12.3019 19.3624 12.4135L27.0263 14.3885C27.1581 14.4248 27.2743 14.5034 27.3572 14.6122C27.44 14.7209 27.4848 14.8539 27.4848 14.9906C27.4848 15.1273 27.44 15.2602 27.3572 15.369C27.2743 15.4778 27.1581 15.5563 27.0263 15.5927L19.3624 17.5677C18.9301 17.6792 18.5356 17.9046 18.2199 18.2203C17.9042 18.536 17.6788 18.9305 17.5673 19.3628L15.5911 27.0267C15.5543 27.158 15.4757 27.2736 15.3671 27.356C15.2584 27.4384 15.1259 27.483 14.9896 27.483C14.8533 27.483 14.7207 27.4384 14.6121 27.356C14.5035 27.2736 14.4248 27.158 14.3881 27.0267L12.4131 19.3628Z" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.9844 3.74768V8.74452" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.4822 6.24603H22.4854" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.99707 21.2366V23.735" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.24647 22.4858H3.74805" stroke="white" strokeWidth="2.49842" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "pinkright": (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#8E35A7" />
                <path d="M17.3337 8L10.0003 15.3333L6.66699 12" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "music": (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.1216C0 6.7702 6.77018 0 15.1216 0H37.8041C46.1555 0 52.9257 6.77018 52.9257 15.1216V37.8041C52.9257 46.1555 46.1555 52.9257 37.8041 52.9257H15.1216C6.7702 52.9257 0 46.1555 0 37.8041V15.1216Z" fill="#9C07CD" />
                <path d="M23.1553 33.0786V18.7445L36.3867 16.5393V30.8734" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.8469 36.3865C21.6738 36.3865 23.1548 34.9055 23.1548 33.0786C23.1548 31.2517 21.6738 29.7708 19.8469 29.7708C18.02 29.7708 16.5391 31.2517 16.5391 33.0786C16.5391 34.9055 18.02 36.3865 19.8469 36.3865Z" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33.0784 34.1814C34.9052 34.1814 36.3862 32.7004 36.3862 30.8735C36.3862 29.0467 34.9052 27.5657 33.0784 27.5657C31.2515 27.5657 29.7705 29.0467 29.7705 30.8735C29.7705 32.7004 31.2515 34.1814 33.0784 34.1814Z" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "movies": (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.1216C0 6.7702 6.77018 0 15.1216 0H37.8041C46.1555 0 52.9257 6.77018 52.9257 15.1216V37.8041C52.9257 46.1555 46.1555 52.9257 37.8041 52.9257H15.1216C6.7702 52.9257 0 46.1555 0 37.8041V15.1216Z" fill="#9C07CD" />
                <path d="M34.181 16.5393H18.7443C17.5264 16.5393 16.5391 17.5266 16.5391 18.7445V34.1812C16.5391 35.3991 17.5264 36.3864 18.7443 36.3864H34.181C35.3989 36.3864 36.3862 35.3991 36.3862 34.1812V18.7445C36.3862 17.5266 35.3989 16.5393 34.181 16.5393Z" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9502 16.5393V36.3864" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5391 21.501H20.9495" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5391 26.4629H36.3862" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5391 31.4246H20.9495" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.9756 16.5393V36.3864" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.9756 21.501H36.3861" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.9756 31.4246H36.3861" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "radio": (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.1216C0 6.7702 6.77018 0 15.1216 0H37.8041C46.1555 0 52.9257 6.77018 52.9257 15.1216V37.8041C52.9257 46.1555 46.1555 52.9257 37.8041 52.9257H15.1216C6.7702 52.9257 0 46.1555 0 37.8041V15.1216Z" fill="#9C07CD" />
                <path d="M18.6343 34.2915C14.3341 29.9913 14.3341 22.9345 18.6343 18.6343" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.8317 31.0939C19.2957 28.5579 19.2957 24.368 21.8317 21.7217" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26.4631 28.6683C27.681 28.6683 28.6683 27.681 28.6683 26.4631C28.6683 25.2451 27.681 24.2578 26.4631 24.2578C25.2451 24.2578 24.2578 25.2451 24.2578 26.4631C24.2578 27.681 25.2451 28.6683 26.4631 28.6683Z" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.0938 21.832C33.6298 24.3681 33.6298 28.558 31.0938 31.2043" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M34.291 18.6343C38.5912 22.9345 38.5912 29.881 34.291 34.1812" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "streams": (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.1216C0 6.7702 6.77018 0 15.1216 0H37.8041C46.1555 0 52.9257 6.77018 52.9257 15.1216V37.8041C52.9257 46.1555 46.1555 52.9257 37.8041 52.9257H15.1216C6.7702 52.9257 0 46.1555 0 37.8041V15.1216Z" fill="#9C07CD" />
                <path d="M19.8467 16.5393L35.2833 26.4629L19.8467 36.3864V16.5393Z" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "tv": (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.1216C0 6.7702 6.77018 0 15.1216 0H37.8041C46.1555 0 52.9257 6.77018 52.9257 15.1216V37.8041C52.9257 46.1555 46.1555 52.9257 37.8041 52.9257H15.1216C6.7702 52.9257 0 46.1555 0 37.8041V15.1216Z" fill="#9C07CD" />
                <path d="M35.2837 20.9497H17.6418C16.4238 20.9497 15.4365 21.937 15.4365 23.1549V35.2838C15.4365 36.5017 16.4238 37.489 17.6418 37.489H35.2837C36.5016 37.489 37.4889 36.5017 37.4889 35.2838V23.1549C37.4889 21.937 36.5016 20.9497 35.2837 20.9497Z" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.9764 15.4365L26.4633 20.9496L20.9502 15.4365" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        "reads": (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.1216C0 6.7702 6.77018 0 15.1216 0H37.8041C46.1555 0 52.9257 6.77018 52.9257 15.1216V37.8041C52.9257 46.1555 46.1555 52.9257 37.8041 52.9257H15.1216C6.7702 52.9257 0 46.1555 0 37.8041V15.1216Z" fill="#9C07CD" />
                <path d="M26.4629 20.9497V36.3864" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5391 33.0786C16.2467 33.0786 15.9663 32.9624 15.7595 32.7556C15.5527 32.5489 15.4365 32.2684 15.4365 31.976V17.6419C15.4365 17.3495 15.5527 17.069 15.7595 16.8623C15.9663 16.6555 16.2467 16.5393 16.5391 16.5393H22.0522C23.222 16.5393 24.3438 17.004 25.1709 17.8311C25.998 18.6582 26.4627 19.7801 26.4627 20.9498C26.4627 19.7801 26.9274 18.6582 27.7545 17.8311C28.5816 17.004 29.7035 16.5393 30.8732 16.5393H36.3863C36.6787 16.5393 36.9592 16.6555 37.166 16.8623C37.3727 17.069 37.4889 17.3495 37.4889 17.6419V31.976C37.4889 32.2684 37.3727 32.5489 37.166 32.7556C36.9592 32.9624 36.6787 33.0786 36.3863 33.0786H29.7706C28.8933 33.0786 28.0519 33.4271 27.4316 34.0474C26.8112 34.6678 26.4627 35.5091 26.4627 36.3864C26.4627 35.5091 26.1142 34.6678 25.4939 34.0474C24.8735 33.4271 24.0322 33.0786 23.1549 33.0786H16.5391Z" stroke="white" strokeWidth="2.20524" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),


    };
    return icon ? iconsList[icon] || null : null;
};

export default Icons;