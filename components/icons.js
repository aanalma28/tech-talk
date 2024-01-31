import style from '../styles/style.module.css'
import style2 from '../styles/dashboard.module.css'
import style3 from '../styles/bottombar.module.css'
import style4 from '../styles/landingpage.module.css'
import style5 from '../styles/style.module.css'
import style6 from '../styles/postscard.module.css'
import styleCreatePost from '../styles/createpost.module.css'

export default function Icons({ name, width, position, click, color }) {
    const icons = [
        {
            name_icon: "user",
            icon: <div id="icon" className={position === "popup" ? style2.profileIcon : style.iconUser}><svg width={width} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path width={width} stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg></div>
        },
        {
            name_icon: "lock",
            icon: <div id="icon" className={style.iconUser}><svg width={width} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path width={width} stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg></div>
        },
        {
            name_icon: "mail",
            icon:  <div id="icon" ><svg width={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M20.9717 8C20.9717 8 16.9505 13 12.0005 13C7.05051 13 3.0293 8 3.0293 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" 
                    stroke="#27005D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path> 
            </g>
            </svg></div>
        },
        {
            name_icon: "home",
            icon: <div id="icon" style={click==='dashboard'?{backgroundColor:'#fff'}:{backgroundColor:''}} className={position==='sidebar'?style2.divsvgIcon:position==='bottombar'?style3.divIconBottom:''}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path fill-rule="evenodd" clip-rule="evenodd" 
                    d="M4.18753 11.3788C4.03002 11.759 4 11.9533 4 12V20.0018C4 20.5529 4.44652 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5535 21 20 20.5529 20 20.0018V12C20 11.9533 19.97 11.759 19.8125 11.3788C19.6662 11.0256 19.4443 10.5926 19.1547 10.1025C18.5764 9.1238 17.765 7.97999 16.8568 6.89018C15.9465 5.79788 14.9639 4.78969 14.0502 4.06454C13.5935 3.70204 13.1736 3.42608 12.8055 3.2444C12.429 3.05862 12.1641 3 12 3C11.8359 3 11.571 3.05862 11.1945 3.2444C10.8264 3.42608 10.4065 3.70204 9.94978 4.06454C9.03609 4.78969 8.05348 5.79788 7.14322 6.89018C6.23505 7.97999 5.42361 9.1238 4.8453 10.1025C4.55568 10.5926 4.33385 11.0256 4.18753 11.3788ZM10.3094 1.45091C10.8353 1.19138 11.4141 1 12 1C12.5859 1 13.1647 1.19138 13.6906 1.45091C14.2248 1.71454 14.7659 2.07921 15.2935 2.49796C16.3486 3.33531 17.4285 4.45212 18.3932 5.60982C19.3601 6.77001 20.2361 8.0012 20.8766 9.08502C21.1963 9.62614 21.4667 10.1462 21.6602 10.6134C21.8425 11.0535 22 11.5467 22 12V20.0018C22 21.6599 20.6557 23 19 23H16C14.8954 23 14 22.1046 14 21V15H10V21C10 22.1046 9.10457 23 8 23H5C3.34434 23 2 21.6599 2 20.0018V12C2 11.5467 2.15748 11.0535 2.33982 10.6134C2.53334 10.1462 2.80369 9.62614 3.12345 9.08502C3.76389 8.0012 4.63995 6.77001 5.60678 5.60982C6.57152 4.45212 7.65141 3.33531 8.70647 2.49796C9.2341 2.07921 9.77521 1.71454 10.3094 1.45091Z" 
                    fill={click==='dashboard'?'var(--maincolor)':'#fff'}>
                </path> 
            </g></svg></div>
        },
        {
            name_icon: "posts",
            icon: <div id="icon" style={click==='posts'?{backgroundColor: '#fff'}:{backgroundColor:''}} className={position==='sidebar'?style2.divsvgIcon:position==='bottombar'?style3.divIconBottom:''}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path fill-rule="evenodd" clip-rule="evenodd" 
                    d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM5 4C4.44772 4 4 4.44772 4 5V10H20V5C20 4.44772 19.5523 4 19 4H5ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM14 13C14.2652 13 14.5196 13.1054 14.7071 13.2929L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L14 15.4142L11.7071 17.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L9.58579 17L9 16.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L8.29289 14.2929C8.48043 14.1054 8.73478 14 9 14C9.26522 14 9.51957 14.1054 9.70711 14.2929L11 15.5858L13.2929 13.2929C13.4804 13.1054 13.7348 13 14 13ZM11 7C11 6.44772 11.4477 6 12 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H12C11.4477 8 11 7.55228 11 7ZM7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" 
                    fill={click==='posts'?'var(--maincolor)':'#fff'}>
                </path> 
            </g></svg></div>
        },
        {
            name_icon: "logout",
            icon: <div id="icon" className={style2.logoutIcon}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path width={width}
                    d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5" 
                    stroke="none" stroke-width="1" 
                    stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg></div>
        },
        {
            name_icon: "star",
            icon: <div id="icon" className={position === "dashboard" ? style2.starDashboard : position === 'card' ? style6.cardStar : ''}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path width={width} d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" 
                    stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path> 
            </g>
            </svg></div>
        },
        {
            name_icon: "share",
            icon: <div id="icon" className={position === 'dashboard' ? style2.shareDashboard : position === 'card' ? style6.cardShare : ''}>
                <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path fill-rule="evenodd" clip-rule="evenodd" 
                            d="M14.734 15.8974L19.22 12.1374C19.3971 11.9927 19.4998 11.7761 19.4998 11.5474C19.4998 11.3187 19.3971 11.1022 19.22 10.9574L14.734 7.19743C14.4947 6.9929 14.1598 6.94275 13.8711 7.06826C13.5824 7.19377 13.3906 7.47295 13.377 7.78743V9.27043C7.079 8.17943 5.5 13.8154 5.5 16.9974C6.961 14.5734 10.747 10.1794 13.377 13.8154V15.3024C13.3888 15.6178 13.5799 15.8987 13.8689 16.0254C14.158 16.1521 14.494 16.1024 14.734 15.8974Z" 
                            stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path> 
                    </g>
                </svg>
            </div>
        },
        {
            name_icon: "comments",
            icon: <div id="icon" className={position === 'dashboard' ? style2.commentsDashboard : position === 'card' ? style6.cardComments : ''}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <g clip-path="url(#clip0_429_11233)"> 
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z" 
                                stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            </path> 
                        </g> <defs> <clipPath id="clip0_429_11233"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g>
                </svg>
                </div>
        },
        {
            name_icon: "arrows",
            icon: <div className={style4.iconArrows} id={position}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M12.9841 4.99255C12.9841 4.44027 13.4318 3.99255 13.9841 3.99255C14.3415 3.99255 14.6551 4.18004 14.8319 4.46202L17.5195 7.14964C17.9101 7.54016 17.9101 8.17333 17.5195 8.56385C17.129 8.95438 16.4958 8.95438 16.1053 8.56385L14.9841 7.44263V14.9926C14.9841 15.5448 14.5364 15.9926 13.9841 15.9926C13.4318 15.9926 12.9841 15.5448 12.9841 14.9926V5.042C12.984 5.03288 12.984 5.02376 12.9841 5.01464V4.99255Z" fill="#393E46"></path> 
                        <path d="M11.0159 19.0074C11.0159 19.5597 10.5682 20.0074 10.0159 20.0074C9.6585 20.0074 9.3449 19.82 9.16807 19.538L6.48045 16.8504C6.08993 16.4598 6.08993 15.8267 6.48045 15.4361C6.87098 15.0456 7.50414 15.0456 7.89467 15.4361L9.01589 16.5574V9.00745C9.01589 8.45516 9.46361 8.00745 10.0159 8.00745C10.5682 8.00745 11.0159 8.45516 11.0159 9.00745V18.958C11.016 18.9671 11.016 18.9762 11.0159 18.9854V19.0074Z" fill="#393E46"></path> 
                    </g>
                </svg>
            </div>
        },
        {
            name_icon: "web",
            icon: <div className={style4.web}>
                <svg fill="#393E46" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M17.5 15c-.797 0-1.456.314-1.88.793-.424.48-.62 1.098-.62 1.707 0 .78-.568 1.418-.81 1.607-.372.294-.165.892.31.893H17c.786 0 1.517-.23 2.072-.662.555-.432.928-1.09.928-1.838 0-.683-.193-1.32-.63-1.785C18.93 15.25 18.273 15 17.5 15zm0 1c.57 0 .914.16 1.14.4.227.24.36.602.36 1.1 0 .432-.19.776-.54 1.05-.353.272-.872.45-1.46.45h-1.423c.237-.4.422-.9.422-1.5 0-.39.13-.772.368-1.043.24-.27.583-.457 1.132-.457zM29.284 5.01c-.126.015-.233.048-.352.09-.238.08-.513.21-.838.374-.65.33-1.477.813-2.35 1.365-1.75 1.103-3.66 2.457-4.642 3.438-.935.934-1.616 1.784-1.936 2.637-.32.852-.186 1.777.478 2.44.665.665 1.59.8 2.442.48.853-.32 1.703-1.002 2.637-1.936.98-.983 2.335-2.893 3.44-4.64.552-.876 1.035-1.704 1.365-2.353.165-.324.293-.6.375-.838.04-.12.072-.226.086-.352.013-.126.047-.327-.167-.54-.214-.215-.413-.18-.54-.167zm-.647 1.444c-.307.603-.78 1.416-1.32 2.27-1.08 1.713-2.46 3.628-3.3 4.468-.888.887-1.678 1.48-2.283 1.707-.604.225-.954.177-1.383-.25-.427-.43-.475-.78-.25-1.384.228-.604.82-1.394 1.71-2.28.84-.84 2.754-2.22 4.466-3.3.856-.542 1.668-1.015 2.272-1.322.134-.036.13.022.09.09zM2.5 8h17c.277 0 .5.223.5.5s-.223.5-.5.5h-17c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zM7 6.5c0 .276-.224.5-.5.5S6 6.776 6 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S4 6.776 4 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S2 6.776 2 6.5s.224-.5.5-.5.5.224.5.5zM1.5 4C.678 4 0 4.678 0 5.5v19c0 .822.678 1.5 1.5 1.5h25c.822 0 1.5-.678 1.5-1.5v-12c0-.668-1-.665-1 0v12c0 .286-.214.5-.5.5h-25c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5h25c.665 0 .657-1 0-1z"></path>
                    </g>
                </svg>
            </div>
        },
        {
            name_icon: "android",
            icon: <div className={style4.android}>
                <svg fill="#393E46" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M24.527 1c.395 0 .59.456.398.764L21.93 6.757c-.34.566-1.16.01-.86-.514l2.997-4.994c.094-.164.272-.25.46-.25zM5.473 1c-.375.007-.59.455-.398.764L8.07 6.757c.338.563 1.174.01.86-.514L5.932 1.25C5.84 1.085 5.66.995 5.473 1zM19.5 13c-.822 0-1.5.678-1.5 1.5v2c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2c0-.822-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v2c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2c0-.286.214-.5.5-.5zm-9-1c-.822 0-1.5.678-1.5 1.5v2c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2c0-.822-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v2c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2c0-.286.214-.5.5-.5zm-9 8c-.822 0-1.5.678-1.5 1.5v4c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-4c0-.822-.678-1.5-1.5-1.5zm0 1h27c.286 0 .5.214.5.5v4c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-4c0-.286.214-.5.5-.5zM15 7C7.937 7.01 1.772 11.695.062 18.377l-.003.012s-.154.594.032 1.247c.093.326.284.685.63.95.347.263.825.413 1.42.413h25.712c.595 0 1.075-.15 1.42-.414.348-.264.54-.623.632-.95.187-.652.037-1.247.037-1.247l-.004-.013C28.23 11.694 22.064 7.007 15 7zm0 1c6.62.006 12.37 4.386 13.967 10.613 0 .002.078.403-.022.75-.05.174-.13.315-.275.426-.147.11-.383.21-.816.21H2.144c-.435 0-.67-.1-.816-.21-.146-.112-.224-.253-.273-.427-.098-.344-.023-.736-.022-.744C2.63 12.39 8.38 8.01 15 8z"></path>
                    </g>
                </svg>
            </div>
        },
        {
            name_icon: "physics",
            icon: <div className={style4.physics}>
                
            </div>
        },
        {
            name_icon: "loading",
            icon: <div className={style5.loadingWrapper}>
                <div className={style5.loading}></div>
            </div>
        },
        {
            name_icon: "eye",
            icon: <div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" 
                            stroke="#d8d8d8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path> 
                    </g>
                </svg>
            </div>
        },
        {
            name_icon: "eye_close",
            icon: <div className={style.eye}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" 
                            stroke="#d8d8d8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path> 
                    </g>
                </svg>
            </div>
        },
        {
            name_icon: "upload_file",
            icon: <div className={styleCreatePost.upload} id="upload-img">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#4600a8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
                        <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" 
                            stroke="#4600a8" stroke-width="1.5" stroke-linecap="round">
                        </path> 
                    </g>
                </svg>
            </div>
        }
        
    ]

    const findIcons = icons.find(({name_icon}) => name_icon === name)
    
    if(findIcons){
        return findIcons.icon
    }
    else{
        return null
    }

}