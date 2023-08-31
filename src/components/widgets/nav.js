import { Frame, $ } from "../../libs/gui.js";


class NavBar extends $ {
	nav;
	constructor(){
		super('<nav class="navbar" />');
		var nav = new Frame('div', 'navbar-inner');
		this.nav = nav;
		this.append(nav);

		const navlogo = $(`<div class="nav-logo">
			<svg width="209" height="275" viewBox="0 0 209 275" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5V170.5C209 228.214 162.214 275 104.5 275C46.7862 275 0 228.214 0 170.5V104.5Z" fill="#EC673F"/>
				<path d="M82.005 208.31V213H65.8V188.745H71.26V208.31H82.005Z" fill="white"/>
				<path d="M85.3717 188.745H90.8317V213H85.3717V188.745Z" fill="white"/>
				<path d="M105.186 198.72C106.166 197.063 107.099 195.407 107.986 193.75C108.873 192.093 109.689 190.425 110.436 188.745H116.456C115.126 191.358 113.749 193.89 112.326 196.34C110.903 198.79 109.398 201.252 107.811 203.725V213H102.351V203.795C100.764 201.322 99.2476 198.848 97.8009 196.375C96.3776 193.902 95.0009 191.358 93.6709 188.745H100.006C100.753 190.425 101.558 192.093 102.421 193.75C103.284 195.407 104.206 197.063 105.186 198.72Z" fill="white"/>
				<path d="M128.771 213.49C127.067 213.49 125.597 213.257 124.361 212.79C123.124 212.3 122.097 211.635 121.281 210.795C120.487 209.932 119.892 208.917 119.496 207.75C119.122 206.56 118.936 205.253 118.936 203.83V188.745H124.396V203.375C124.396 204.355 124.501 205.195 124.711 205.895C124.944 206.572 125.247 207.132 125.621 207.575C126.017 207.995 126.484 208.298 127.021 208.485C127.581 208.672 128.187 208.765 128.841 208.765C130.171 208.765 131.244 208.357 132.061 207.54C132.901 206.723 133.321 205.335 133.321 203.375V188.745H138.781V203.83C138.781 205.253 138.582 206.56 138.186 207.75C137.789 208.94 137.182 209.967 136.366 210.83C135.549 211.67 134.511 212.323 133.251 212.79C131.991 213.257 130.497 213.49 128.771 213.49Z" fill="white"/>
				<path d="M24.251 180.785C24.1582 180.743 24.0881 180.695 24.0407 180.641C24 180.585 23.9736 180.511 23.9617 180.419C23.948 180.313 23.969 180.189 24.0246 180.048C24.0811 179.913 24.1404 179.747 24.2024 179.551C24.2653 179.361 24.3173 179.139 24.3584 178.885C24.3995 178.631 24.3983 178.336 24.3547 177.998C24.3188 177.721 24.2496 177.471 24.1469 177.249C24.0518 177.033 23.9311 176.853 23.785 176.711C23.6455 176.568 23.4842 176.464 23.3012 176.4C23.1248 176.336 22.9407 176.316 22.749 176.341C22.4977 176.373 22.2989 176.473 22.1524 176.64C22.0067 176.813 21.8898 177.026 21.8015 177.28C21.7141 177.54 21.6405 177.828 21.5806 178.145C21.5282 178.468 21.4696 178.795 21.4049 179.126C21.341 179.463 21.2592 179.793 21.1597 180.115C21.0676 180.443 20.9345 180.739 20.7603 181.004C20.5935 181.274 20.3774 181.5 20.1119 181.683C19.8473 181.871 19.51 181.992 19.1 182.045C18.6306 182.106 18.1831 182.076 17.7576 181.957C17.3395 181.843 16.9637 181.639 16.6301 181.346C16.2973 181.06 16.0171 180.686 15.7894 180.225C15.5617 179.763 15.4077 179.222 15.3274 178.6C15.2377 177.906 15.2705 177.25 15.4259 176.632C15.5812 176.013 15.8118 175.483 16.1176 175.04L16.9203 175.4C17.0197 175.441 17.0977 175.498 17.1542 175.571C17.2174 175.644 17.2575 175.746 17.2746 175.878C17.2908 176.004 17.2612 176.139 17.1857 176.283C17.1103 176.427 17.0283 176.599 16.9398 176.799C16.8579 176.998 16.7878 177.235 16.7294 177.512C16.6777 177.787 16.6774 178.124 16.7287 178.52C16.7714 178.851 16.8482 179.133 16.9592 179.368C17.0768 179.601 17.2152 179.788 17.3746 179.929C17.5414 180.076 17.7225 180.176 17.9179 180.232C18.1133 180.287 18.3134 180.302 18.5184 180.275C18.7829 180.241 18.9912 180.137 19.1435 179.963C19.3032 179.794 19.43 179.579 19.5241 179.319C19.6189 179.064 19.6925 178.776 19.7449 178.453C19.7974 178.13 19.8555 177.8 19.9194 177.463C19.9834 177.125 20.0647 176.792 20.1633 176.463C20.262 176.134 20.4014 175.834 20.5813 175.562C20.7621 175.297 20.9948 175.068 21.2793 174.877C21.5646 174.692 21.9255 174.572 22.3618 174.515C22.7519 174.465 23.1357 174.496 23.5133 174.608C23.8917 174.728 24.236 174.922 24.5464 175.191C24.8577 175.466 25.1217 175.819 25.3385 176.248C25.5627 176.683 25.7124 177.191 25.7876 177.773C25.8739 178.441 25.8459 179.056 25.7035 179.619C25.562 180.188 25.3309 180.689 25.0102 181.12L24.251 180.785Z" fill="white"/>
				<path d="M28.7672 191.277C28.9941 191.988 29.0813 192.667 29.0286 193.314C28.9843 193.965 28.8069 194.56 28.4963 195.1C28.1941 195.644 27.7694 196.123 27.2222 196.535C26.6814 196.946 26.0299 197.272 25.2677 197.516C24.5056 197.759 23.782 197.871 23.097 197.851C22.4121 197.832 21.7888 197.688 21.2272 197.419C20.6677 197.157 20.1783 196.774 19.7589 196.271C19.3479 195.772 19.0289 195.167 18.802 194.456C18.573 193.738 18.4807 193.054 18.525 192.403C18.5776 191.756 18.755 191.161 19.0572 190.617C19.3595 190.072 19.7832 189.591 20.3283 189.172C20.8755 188.76 21.5302 188.432 22.2923 188.189C23.0545 187.945 23.7749 187.835 24.4535 187.856C25.1405 187.882 25.7648 188.029 26.3263 188.298C26.8942 188.564 27.3837 188.947 27.7947 189.446C28.2141 189.949 28.5382 190.559 28.7672 191.277ZM20.2501 193.994C20.5418 194.908 21.0677 195.493 21.8276 195.747C22.5876 196.002 23.5264 195.951 24.6443 195.594C25.7621 195.238 26.5571 194.735 27.0294 194.088C27.5079 193.438 27.6013 192.656 27.3096 191.742C27.0138 190.815 26.4817 190.222 25.7134 189.963C24.9534 189.708 24.0146 189.759 22.8967 190.116C21.7789 190.473 20.9839 190.975 20.5117 191.622C20.0415 192.276 19.9543 193.067 20.2501 193.994Z" fill="white"/>
				<path d="M24.11 207.299L31.6897 203.322L31.3123 202.323C31.2705 202.171 31.2589 202.035 31.2774 201.912C31.3048 201.792 31.3835 201.698 31.5134 201.63L32.2306 201.254L32.9648 202.653L33.7794 202.225C34.293 201.956 34.7892 201.789 35.2681 201.726C35.747 201.663 36.1964 201.695 36.6163 201.82C37.0453 201.949 37.4313 202.168 37.7743 202.478C38.1264 202.79 38.4294 203.188 38.6834 203.672C38.8972 204.079 39.0349 204.485 39.0965 204.889L38.2101 205.309C38.1303 205.344 38.0588 205.351 37.9958 205.332C37.9387 205.309 37.8827 205.267 37.8279 205.205C37.7761 205.149 37.7209 205.073 37.6623 204.976C37.6128 204.881 37.5586 204.778 37.4997 204.666C37.3603 204.4 37.2008 204.175 37.0212 203.991C36.8417 203.807 36.6349 203.678 36.4009 203.605C36.1668 203.532 35.9012 203.521 35.604 203.571C35.3127 203.619 34.9811 203.74 34.6092 203.935L33.8477 204.335L35.172 206.859L33.9147 207.518L32.6182 205.048L25.0208 209.035L24.11 207.299Z" fill="white"/>
				<path d="M32.3608 220.994C31.8747 220.334 31.6846 219.687 31.7903 219.055C31.8999 218.428 32.2984 217.861 32.9857 217.356L37.8824 213.752L37.1829 212.801C37.1157 212.71 37.0853 212.612 37.0915 212.508C37.1071 212.406 37.1713 212.313 37.2841 212.23L37.9203 211.762L39.0836 212.954L41.7847 211.513C41.8918 211.467 41.9912 211.456 42.083 211.479C42.1841 211.504 42.2703 211.565 42.3414 211.662L42.9282 212.459L40.1819 214.48L41.889 216.8L40.7454 217.642L39.0382 215.322L34.2462 218.849C33.9241 219.086 33.7398 219.342 33.6933 219.616C33.6561 219.892 33.7284 220.153 33.9102 220.4C34.0169 220.545 34.1266 220.655 34.2393 220.729C34.3559 220.809 34.4633 220.87 34.5616 220.914C34.6653 220.954 34.7556 220.986 34.8327 221.012C34.9098 221.038 34.9642 221.073 34.9958 221.116C35.0353 221.17 35.0515 221.22 35.0445 221.266C35.0467 221.314 35.0328 221.374 35.0028 221.446L34.5896 222.47C34.1637 222.386 33.7559 222.215 33.3662 221.955C32.9765 221.696 32.6414 221.375 32.3608 220.994Z" fill="white"/>
				<path d="M56.3329 231.072L47.0748 236.383L45.9213 235.333C45.7833 235.207 45.7727 235.03 45.8894 234.803L48.7639 228.467C48.8367 228.308 48.9122 228.156 48.9903 228.011C49.0729 227.861 49.158 227.713 49.2456 227.567C48.9678 227.783 48.6796 227.976 48.3808 228.146L42.3328 231.565C42.1175 231.702 41.9284 231.697 41.7658 231.549L40.6714 230.553L45.0863 220.832L46.225 221.869C46.3383 221.972 46.4073 222.084 46.4319 222.206C46.4614 222.332 46.4503 222.448 46.3987 222.554L43.5508 228.4C43.4246 228.628 43.298 228.846 43.1709 229.055C43.0438 229.264 42.9143 229.471 42.7823 229.675C42.9882 229.538 43.1966 229.403 43.4075 229.271C43.6233 229.142 43.8436 229.009 44.0684 228.871L49.7974 225.595C49.8983 225.533 50.0057 225.509 50.1196 225.523C50.238 225.531 50.3465 225.581 50.4451 225.67L51.0736 226.243C51.182 226.341 51.2461 226.449 51.2657 226.566C51.2948 226.683 51.2835 226.794 51.2318 226.901L48.4679 232.877C48.3516 233.114 48.235 233.346 48.1183 233.573C48.006 233.796 47.8865 234.016 47.7599 234.234C47.9511 234.084 48.1471 233.938 48.3482 233.796C48.5537 233.65 48.7686 233.503 48.9929 233.355L54.5693 229.994C54.6702 229.932 54.7824 229.908 54.9057 229.921C55.0339 229.939 55.1473 229.992 55.2459 230.082L56.3329 231.072Z" fill="white"/>
				<path d="M62.8189 241.604C62.1207 241.226 61.5075 240.941 60.9793 240.748C60.4546 240.549 60.0022 240.431 59.6222 240.394C59.2422 240.358 58.9304 240.395 58.687 240.508C58.4469 240.615 58.2596 240.783 58.125 241.013C57.9971 241.232 57.9205 241.442 57.8953 241.644C57.8793 241.843 57.9014 242.029 57.9616 242.204C58.031 242.376 58.1357 242.533 58.2757 242.677C58.4156 242.821 58.5834 242.95 58.7791 243.064C59.0381 243.215 59.2891 243.328 59.5324 243.4C59.7813 243.476 60.0277 243.524 60.2714 243.543C60.5186 243.556 60.7688 243.544 61.0223 243.507C61.2757 243.47 61.538 243.411 61.8092 243.33L62.8189 241.604ZM60.017 235.065C60.7788 234.885 61.5118 234.846 62.2162 234.949C62.9263 235.056 63.6237 235.309 64.3085 235.71C64.8092 236.002 65.2035 236.345 65.4914 236.737C65.7828 237.124 65.975 237.541 66.068 237.99C66.1611 238.438 66.1543 238.905 66.0477 239.391C65.9468 239.881 65.7517 240.373 65.4622 240.868L62.1907 246.461L61.4397 246.022C61.2728 245.924 61.1614 245.824 61.1054 245.722C61.0527 245.614 61.0442 245.47 61.0799 245.29L61.348 244.416C61.0024 244.492 60.6731 244.546 60.3602 244.58C60.0507 244.607 59.7414 244.608 59.4324 244.581C59.1325 244.553 58.8305 244.488 58.5264 244.387C58.2222 244.287 57.9062 244.141 57.5781 243.949C57.2329 243.747 56.9346 243.511 56.6835 243.24C56.4415 242.967 56.2655 242.667 56.1555 242.34C56.0455 242.014 56.0101 241.665 56.0494 241.294C56.0945 240.926 56.2314 240.547 56.4603 240.155C56.6622 239.81 56.9479 239.533 57.3171 239.324C57.6955 239.113 58.1688 239.004 58.737 238.996C59.3109 238.992 59.9845 239.108 60.7578 239.344C61.5369 239.584 62.4309 239.983 63.4399 240.542L63.8135 239.903C64.2006 239.242 64.349 238.664 64.2589 238.171C64.1688 237.678 63.8504 237.272 63.3037 236.952C62.9354 236.737 62.5977 236.601 62.2906 236.545C61.9893 236.492 61.713 236.47 61.4615 236.477C61.2191 236.482 61.002 236.49 60.81 236.502C60.6238 236.516 60.4588 236.482 60.3149 236.397C60.1998 236.33 60.1176 236.24 60.0683 236.126C60.0248 236.015 60.0024 235.902 60.0011 235.785L60.017 235.065Z" fill="white"/>
				<path d="M74.2409 242.905C74.7847 242.4 75.3394 242.052 75.905 241.862C76.4706 241.672 77.0553 241.693 77.659 241.925C77.8644 242.004 78.0478 242.103 78.2092 242.222C78.3792 242.337 78.5148 242.467 78.6159 242.613L77.9679 243.939C77.8598 244.09 77.7249 244.135 77.5631 244.073C77.4759 244.04 77.3512 243.974 77.1889 243.876C77.0289 243.772 76.8493 243.681 76.6502 243.605C76.3576 243.493 76.0826 243.437 75.8251 243.438C75.57 243.433 75.3199 243.48 75.0749 243.579C74.8386 243.674 74.6053 243.816 74.3753 244.007C74.1476 244.191 73.9161 244.412 73.6808 244.672L71.4024 250.61L69.5818 249.911L73.2216 240.426L74.2672 240.827C74.4664 240.903 74.5859 240.992 74.6257 241.093C74.6741 241.19 74.6793 241.335 74.6411 241.527L74.2409 242.905Z" fill="white"/>
				<path d="M90.2348 249.456C90.3107 249.077 90.3252 248.716 90.2783 248.374C90.2379 248.033 90.1366 247.723 89.9746 247.446C89.8126 247.169 89.5943 246.935 89.3198 246.744C89.0453 246.553 88.712 246.418 88.3198 246.339C87.5157 246.178 86.8352 246.283 86.2781 246.654C85.7275 247.027 85.3077 247.612 85.0184 248.411L90.2348 249.456ZM90.8783 254.44C90.588 254.667 90.2689 254.851 89.9211 254.993C89.5746 255.127 89.2157 255.222 88.8443 255.277C88.473 255.331 88.0951 255.351 87.7107 255.335C87.3329 255.321 86.9642 255.277 86.6047 255.205C85.9183 255.068 85.3039 254.826 84.7615 254.479C84.2268 254.127 83.7883 253.686 83.446 253.155C83.1114 252.619 82.8894 251.996 82.7798 251.288C82.678 250.574 82.7136 249.785 82.8865 248.922C83.0253 248.229 83.2622 247.607 83.5971 247.056C83.9333 246.497 84.3452 246.036 84.833 245.671C85.3274 245.308 85.891 245.057 86.5238 244.919C87.1567 244.781 87.8359 244.784 88.5615 244.929C89.1694 245.051 89.708 245.264 90.1772 245.569C90.6544 245.869 91.0412 246.246 91.3379 246.699C91.6345 247.153 91.8318 247.679 91.9296 248.276C92.034 248.875 92.0148 249.531 91.8721 250.243C91.8132 250.537 91.7405 250.73 91.6542 250.822C91.5692 250.907 91.4384 250.932 91.2619 250.896L84.7317 249.588C84.6321 250.187 84.613 250.723 84.6743 251.198C84.7369 251.666 84.8695 252.073 85.072 252.42C85.2811 252.768 85.5542 253.05 85.8915 253.267C86.2287 253.485 86.6229 253.638 87.0739 253.729C87.4988 253.814 87.8747 253.838 88.2016 253.802C88.535 253.766 88.8239 253.715 89.0684 253.649C89.3208 253.577 89.532 253.507 89.702 253.439C89.8785 253.373 90.0256 253.351 90.1432 253.375C90.3001 253.406 90.4093 253.489 90.4707 253.624L90.8783 254.44Z" fill="white"/>
				<path d="M115.267 247.621C115.223 247.713 115.173 247.782 115.118 247.828C115.062 247.867 114.987 247.892 114.894 247.902C114.788 247.913 114.665 247.889 114.525 247.83C114.391 247.77 114.227 247.707 114.032 247.64C113.844 247.573 113.624 247.516 113.371 247.468C113.118 247.421 112.822 247.416 112.484 247.451C112.206 247.48 111.954 247.544 111.73 247.641C111.511 247.731 111.329 247.847 111.183 247.99C111.037 248.126 110.929 248.285 110.861 248.466C110.792 248.641 110.768 248.825 110.788 249.017C110.815 249.269 110.91 249.47 111.073 249.62C111.243 249.77 111.453 249.892 111.705 249.986C111.963 250.08 112.249 250.16 112.565 250.228C112.886 250.288 113.211 250.354 113.541 250.427C113.877 250.499 114.205 250.588 114.524 250.696C114.85 250.795 115.143 250.936 115.403 251.116C115.669 251.289 115.89 251.511 116.066 251.78C116.249 252.05 116.361 252.39 116.405 252.801C116.454 253.271 116.414 253.718 116.284 254.141C116.16 254.556 115.947 254.927 115.647 255.253C115.352 255.579 114.972 255.85 114.505 256.067C114.039 256.284 113.494 256.425 112.871 256.49C112.175 256.563 111.519 256.515 110.905 256.345C110.29 256.175 109.765 255.932 109.33 255.615L109.709 254.821C109.752 254.723 109.811 254.646 109.886 254.592C109.96 254.53 110.063 254.493 110.196 254.479C110.322 254.465 110.456 254.498 110.598 254.577C110.741 254.656 110.911 254.742 111.108 254.835C111.305 254.922 111.541 254.998 111.816 255.063C112.09 255.121 112.426 255.129 112.824 255.087C113.155 255.053 113.44 254.982 113.677 254.877C113.913 254.765 114.103 254.631 114.248 254.475C114.398 254.312 114.503 254.133 114.563 253.939C114.623 253.745 114.643 253.546 114.621 253.34C114.593 253.075 114.494 252.864 114.323 252.708C114.159 252.544 113.947 252.412 113.689 252.312C113.437 252.211 113.15 252.13 112.829 252.07C112.507 252.01 112.179 251.944 111.843 251.872C111.507 251.8 111.175 251.711 110.849 251.605C110.523 251.498 110.226 251.352 109.958 251.165C109.697 250.978 109.475 250.74 109.29 250.451C109.112 250.162 109 249.798 108.954 249.36C108.913 248.969 108.953 248.586 109.075 248.211C109.203 247.836 109.405 247.496 109.682 247.192C109.965 246.888 110.323 246.632 110.757 246.426C111.198 246.212 111.709 246.074 112.293 246.013C112.962 245.943 113.577 245.986 114.136 246.141C114.702 246.296 115.197 246.539 115.621 246.87L115.267 247.621Z" fill="white"/>
				<path d="M125.864 243.356C126.58 243.146 127.261 243.075 127.906 243.144C128.556 243.203 129.147 243.395 129.679 243.718C130.216 244.033 130.684 244.469 131.084 245.026C131.481 245.577 131.792 246.236 132.017 247.004C132.242 247.771 132.337 248.497 132.301 249.182C132.265 249.866 132.106 250.486 131.824 251.041C131.549 251.594 131.155 252.074 130.642 252.481C130.133 252.88 129.521 253.185 128.804 253.395C128.081 253.606 127.395 253.682 126.745 253.623C126.1 253.554 125.509 253.363 124.972 253.048C124.435 252.733 123.964 252.298 123.558 251.743C123.159 251.186 122.847 250.523 122.622 249.756C122.397 248.988 122.304 248.265 122.341 247.587C122.383 246.901 122.545 246.28 122.827 245.725C123.108 245.164 123.502 244.684 124.01 244.285C124.523 243.878 125.141 243.568 125.864 243.356ZM128.377 251.936C129.298 251.666 129.895 251.154 130.168 250.4C130.44 249.647 130.411 248.707 130.082 247.581C129.752 246.455 129.269 245.648 128.633 245.161C127.995 244.667 127.215 244.555 126.294 244.825C125.36 245.098 124.754 245.616 124.477 246.378C124.205 247.132 124.234 248.071 124.563 249.197C124.893 250.323 125.376 251.13 126.012 251.618C126.655 252.103 127.443 252.209 128.377 251.936Z" fill="white"/>
				<path d="M136.6 234.489L142.914 247.831L141.142 248.669L134.828 235.327L136.6 234.489Z" fill="white"/>
				<path d="M151.689 230.701L157.418 239.092L156.451 239.752C156.231 239.902 156.015 239.893 155.802 239.723L155.111 238.96C155.061 239.276 154.992 239.582 154.902 239.877C154.813 240.172 154.695 240.455 154.548 240.724C154.398 240.989 154.216 241.238 154.005 241.471C153.796 241.71 153.546 241.929 153.255 242.128C152.792 242.444 152.332 242.645 151.874 242.731C151.422 242.814 150.984 242.799 150.559 242.685C150.131 242.566 149.722 242.352 149.334 242.044C148.946 241.736 148.591 241.345 148.268 240.871L144.62 235.528L146.238 234.423L149.886 239.766C150.296 240.366 150.753 240.74 151.258 240.888C151.759 241.031 152.293 240.908 152.86 240.521C153.273 240.239 153.592 239.88 153.819 239.443C154.041 239 154.193 238.501 154.274 237.945L150.079 231.801L151.689 230.701Z" fill="white"/>
				<path d="M166.789 231.131C166.203 231.704 165.589 231.981 164.948 231.964C164.312 231.943 163.695 231.627 163.099 231.016L158.852 226.666L158.007 227.49C157.926 227.569 157.834 227.613 157.73 227.621C157.626 227.62 157.525 227.569 157.428 227.469L156.876 226.904L157.896 225.587L156.094 223.111C156.033 223.012 156.009 222.915 156.019 222.82C156.03 222.717 156.078 222.623 156.164 222.539L156.872 221.848L159.255 224.288L161.315 222.275L162.307 223.291L160.247 225.303L164.404 229.561C164.683 229.847 164.962 229.994 165.24 230.002C165.518 230.001 165.767 229.893 165.986 229.678C166.115 229.553 166.208 229.429 166.266 229.307C166.329 229.181 166.375 229.066 166.405 228.962C166.43 228.854 166.45 228.76 166.465 228.68C166.48 228.6 166.507 228.541 166.545 228.504C166.592 228.458 166.64 228.435 166.687 228.435C166.734 228.426 166.795 228.432 166.871 228.452L167.942 228.719C167.918 229.152 167.805 229.58 167.602 230.002C167.399 230.424 167.128 230.8 166.789 231.131Z" fill="white"/>
				<path d="M166.793 215.547L174.797 221.805L173.596 223.341L165.592 217.084L166.793 215.547ZM164.547 213.322C164.689 213.433 164.803 213.568 164.889 213.729C164.97 213.885 165.021 214.052 165.043 214.23C165.063 214.398 165.051 214.571 165.006 214.747C164.956 214.92 164.876 215.077 164.765 215.219C164.654 215.36 164.523 215.474 164.372 215.559C164.216 215.64 164.051 215.693 163.879 215.719C163.705 215.736 163.533 215.723 163.361 215.683C163.189 215.632 163.032 215.552 162.89 215.441C162.743 215.326 162.627 215.193 162.542 215.042C162.456 214.882 162.403 214.717 162.382 214.549C162.36 214.371 162.372 214.198 162.418 214.031C162.459 213.86 162.535 213.704 162.646 213.562C162.757 213.42 162.892 213.306 163.053 213.22C163.208 213.13 163.372 213.076 163.546 213.06C163.719 213.034 163.893 213.043 164.07 213.088C164.241 213.129 164.4 213.207 164.547 213.322Z" fill="white"/>
				<path d="M172.791 206.116C173.154 205.463 173.588 204.934 174.095 204.529C174.599 204.115 175.154 203.836 175.76 203.692C176.364 203.539 177.003 203.52 177.679 203.635C178.348 203.748 179.033 203.998 179.732 204.386C180.432 204.774 181.009 205.224 181.465 205.736C181.92 206.248 182.243 206.801 182.432 207.394C182.625 207.981 182.682 208.6 182.603 209.25C182.522 209.891 182.3 210.538 181.938 211.191C181.572 211.849 181.138 212.386 180.633 212.8C180.127 213.205 179.572 213.484 178.968 213.637C178.365 213.79 177.724 213.812 177.045 213.702C176.37 213.587 175.682 213.335 174.983 212.947C174.283 212.559 173.708 212.11 173.259 211.602C172.807 211.084 172.486 210.528 172.296 209.935C172.101 209.339 172.044 208.72 172.125 208.079C172.204 207.429 172.426 206.775 172.791 206.116ZM180.609 210.453C181.075 209.614 181.14 208.83 180.804 208.103C180.468 207.375 179.787 206.727 178.761 206.157C177.735 205.588 176.824 205.354 176.029 205.454C175.228 205.551 174.595 206.019 174.129 206.858C173.657 207.709 173.59 208.503 173.929 209.24C174.264 209.968 174.945 210.616 175.971 211.185C176.997 211.755 177.908 211.989 178.703 211.889C179.501 211.783 180.137 211.304 180.609 210.453Z" fill="white"/>
				<path d="M179.754 194.707C179.598 194.427 179.465 194.143 179.354 193.855C179.242 193.568 179.164 193.277 179.118 192.983C179.067 192.68 179.054 192.371 179.077 192.056C179.096 191.734 179.159 191.404 179.267 191.067C179.437 190.534 179.675 190.095 179.98 189.752C180.288 189.402 180.647 189.142 181.058 188.973C181.463 188.801 181.913 188.717 182.409 188.721C182.904 188.725 183.425 188.814 183.971 188.989L190.135 190.955L189.539 192.822L183.375 190.856C182.683 190.635 182.096 190.623 181.613 190.819C181.125 191.013 180.776 191.437 180.567 192.091C180.415 192.567 180.387 193.051 180.482 193.544C180.572 194.027 180.755 194.509 181.029 194.988L188.126 197.252L187.533 199.11L177.854 196.022L178.21 194.908C178.293 194.647 178.468 194.525 178.736 194.54L179.754 194.707Z" fill="white"/>
				<path d="M184.449 175.112C184.528 175.176 184.584 175.24 184.616 175.305C184.641 175.369 184.648 175.447 184.636 175.539C184.622 175.645 184.571 175.76 184.481 175.882C184.392 175.999 184.292 176.144 184.183 176.318C184.074 176.485 183.967 176.686 183.863 176.922C183.758 177.157 183.684 177.443 183.641 177.78C183.605 178.058 183.608 178.317 183.651 178.558C183.688 178.791 183.759 178.996 183.864 179.17C183.963 179.345 184.092 179.486 184.253 179.594C184.407 179.701 184.58 179.767 184.772 179.792C185.023 179.824 185.241 179.779 185.425 179.654C185.61 179.524 185.777 179.347 185.927 179.124C186.078 178.895 186.222 178.635 186.361 178.344C186.494 178.045 186.633 177.744 186.78 177.44C186.928 177.13 187.091 176.831 187.269 176.545C187.441 176.251 187.645 175.999 187.881 175.787C188.111 175.568 188.378 175.405 188.681 175.296C188.985 175.18 189.342 175.149 189.751 175.202C190.221 175.263 190.646 175.405 191.027 175.629C191.403 175.846 191.714 176.138 191.963 176.506C192.212 176.868 192.388 177.301 192.491 177.805C192.593 178.309 192.605 178.872 192.524 179.493C192.435 180.187 192.236 180.814 191.929 181.372C191.621 181.931 191.263 182.385 190.855 182.736L190.17 182.184C190.084 182.119 190.024 182.044 189.988 181.958C189.945 181.872 189.932 181.763 189.949 181.631C189.965 181.505 190.028 181.382 190.138 181.262C190.248 181.142 190.371 180.996 190.507 180.825C190.637 180.654 190.765 180.442 190.892 180.19C191.012 179.936 191.098 179.611 191.149 179.214C191.191 178.884 191.189 178.591 191.141 178.336C191.087 178.08 191.001 177.864 190.882 177.688C190.758 177.504 190.609 177.36 190.434 177.257C190.259 177.153 190.069 177.089 189.864 177.062C189.6 177.028 189.372 177.076 189.18 177.206C188.983 177.328 188.805 177.503 188.648 177.732C188.492 177.954 188.347 178.214 188.215 178.513C188.082 178.811 187.942 179.116 187.794 179.426C187.646 179.737 187.483 180.038 187.304 180.331C187.125 180.624 186.914 180.879 186.671 181.096C186.428 181.307 186.145 181.468 185.821 181.581C185.499 181.687 185.119 181.712 184.683 181.656C184.292 181.605 183.929 181.478 183.593 181.273C183.257 181.062 182.973 180.786 182.741 180.447C182.511 180.101 182.345 179.693 182.244 179.223C182.138 178.746 182.122 178.216 182.197 177.634C182.284 176.966 182.467 176.378 182.748 175.87C183.03 175.355 183.38 174.93 183.8 174.594L184.449 175.112Z" fill="white"/>
				<path d="M117.216 150.683C116.625 151.277 116.173 151.995 115.891 152.783C115.609 153.572 115.505 154.414 115.585 155.247L115.557 155.219C115.64 156.201 115.508 157.189 115.169 158.114C114.831 159.039 114.294 159.879 113.597 160.575C112.9 161.272 112.06 161.808 111.134 162.146C110.209 162.484 109.22 162.617 108.238 162.534L108.266 162.562C107.092 162.453 105.912 162.708 104.888 163.294C103.863 163.879 103.045 164.766 102.544 165.833C102.042 166.901 101.882 168.097 102.086 169.258C102.29 170.419 102.847 171.49 103.682 172.323C104.516 173.157 105.588 173.712 106.75 173.915C107.912 174.117 109.109 173.957 110.176 173.455C111.244 172.953 112.131 172.134 112.715 171.11C113.3 170.086 113.555 168.906 113.444 167.732L113.474 167.76C113.391 166.779 113.524 165.791 113.862 164.866C114.201 163.941 114.737 163.101 115.434 162.404C116.131 161.708 116.971 161.172 117.897 160.834C118.823 160.495 119.811 160.363 120.793 160.446L120.763 160.418C121.723 160.504 122.689 160.347 123.572 159.961C124.454 159.574 125.225 158.972 125.813 158.209C126.4 157.446 126.785 156.547 126.933 155.595C127.08 154.644 126.985 153.67 126.655 152.765C126.326 151.86 125.773 151.053 125.049 150.418C124.324 149.784 123.451 149.342 122.51 149.135C121.569 148.927 120.591 148.96 119.667 149.231C118.742 149.502 117.901 150.001 117.221 150.683H117.216Z" fill="white"/>
				<path d="M105.498 158.928L105.467 158.899C106.333 158.986 107.207 158.88 108.027 158.588C108.847 158.295 109.592 157.825 110.208 157.209C110.823 156.594 111.295 155.85 111.587 155.03C111.88 154.21 111.987 153.336 111.901 152.469L111.931 152.498C111.845 151.479 111.983 150.454 112.334 149.493C112.685 148.533 113.242 147.661 113.965 146.938C114.688 146.215 115.56 145.658 116.52 145.307C117.48 144.956 118.506 144.818 119.525 144.904L119.494 144.875C120.713 144.99 121.937 144.725 123 144.118C124.064 143.511 124.914 142.591 125.435 141.483C125.955 140.374 126.122 139.133 125.911 137.927C125.701 136.72 125.123 135.609 124.257 134.743C123.392 133.877 122.28 133.299 121.074 133.089C119.868 132.878 118.627 133.045 117.519 133.566C116.411 134.087 115.49 134.937 114.883 136C114.276 137.063 114.012 138.288 114.126 139.507L114.097 139.476C114.184 140.495 114.046 141.521 113.695 142.481C113.344 143.442 112.788 144.314 112.065 145.038C111.342 145.761 110.469 146.317 109.509 146.668C108.548 147.02 107.523 147.157 106.504 147.071L106.533 147.101C105.667 147.014 104.792 147.12 103.973 147.413C103.153 147.705 102.408 148.175 101.792 148.791C101.177 149.406 100.705 150.15 100.413 150.97C100.12 151.79 100.013 152.664 100.1 153.531L100.07 153.502C100.156 154.521 100.018 155.546 99.6673 156.506C99.3159 157.467 98.7595 158.339 98.0365 159.062C97.3135 159.785 96.4415 160.341 95.4813 160.693C94.5211 161.044 93.4959 161.182 92.477 161.096L92.5061 161.125C91.2873 161.01 90.0627 161.275 88.9996 161.882C87.9364 162.489 87.0864 163.409 86.5655 164.518C86.0446 165.626 85.8781 166.867 86.0888 168.073C86.2994 169.28 86.877 170.391 87.7427 171.257C88.6084 172.123 89.72 172.701 90.926 172.911C92.132 173.122 93.3736 172.955 94.4815 172.434C95.5894 171.914 96.5096 171.063 97.1167 170C97.7238 168.937 97.9881 167.712 97.8736 166.493L97.9044 166.522C97.8183 165.503 97.9558 164.478 98.307 163.517C98.658 162.557 99.2147 161.685 99.9376 160.961C100.661 160.238 101.533 159.682 102.493 159.331C103.453 158.979 104.479 158.842 105.498 158.928Z" fill="#222126"/>
				<path d="M94.7778 155.316C95.3689 154.722 95.8215 154.005 96.1032 153.216C96.3849 152.427 96.4888 151.585 96.4075 150.752L96.4371 150.78C96.3542 149.798 96.4867 148.81 96.8254 147.884C97.1641 146.959 97.701 146.118 98.3984 145.422C99.0958 144.725 99.9368 144.189 100.863 143.851C101.789 143.513 102.778 143.381 103.761 143.464L103.731 143.436C104.905 143.546 106.086 143.291 107.11 142.706C108.134 142.122 108.953 141.235 109.455 140.168C109.957 139.101 110.117 137.906 109.914 136.744C109.711 135.583 109.155 134.512 108.32 133.678C107.486 132.845 106.415 132.288 105.253 132.086C104.091 131.883 102.894 132.043 101.826 132.544C100.759 133.046 99.8718 133.864 99.2867 134.888C98.7014 135.912 98.4464 137.091 98.5565 138.265L98.5284 138.237C98.6114 139.219 98.4788 140.206 98.1403 141.132C97.8017 142.057 97.2653 142.897 96.5682 143.594C95.8712 144.29 95.0305 144.826 94.1047 145.165C93.1789 145.503 92.1904 145.635 91.2082 145.552L91.2362 145.581C90.2765 145.495 89.3105 145.652 88.4279 146.038C87.5452 146.425 86.7745 147.028 86.187 147.791C85.5995 148.554 85.2144 149.453 85.0672 150.405C84.92 151.357 85.0156 152.33 85.3451 153.235C85.6745 154.14 86.2273 154.947 86.952 155.582C87.6767 156.217 88.5501 156.658 89.491 156.866C90.432 157.073 91.4101 157.04 92.3349 156.769C93.2596 156.498 94.1009 155.999 94.781 155.316H94.7778Z" fill="white"/>
			</svg>
		</div><div class="menu-button">
<svg width="23" class="menu-icon" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_317_173)">
<path d="M3 1L13.5 1M20 1L17.75 1" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 11L3 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 11L20 6M20 11L15 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 6L7 6M3 6L4.2 6" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_317_173" x="0.25" y="0.25" width="22.5" height="16.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_317_173"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_317_173" result="shape"/>
</filter>
</defs>
</svg>

</div>`);
		
		const buttons = [
			'Pricing',
			'Services',
			'Portfolio',
			navlogo,
			'About Us',
			'Blogs',
			'Contact Us'
		];

		var buttonsHtml = ' <ul class="navbar-nav pre-mid">',
			allButtons = ' <ul class="navbar-nav hidden">';

		buttons.forEach(text => {
			if(typeof text != 'string'){
				nav.append(buttonsHtml+'</ul>');
				nav.append(navlogo);
				buttonsHtml = '<ul class="navbar-nav post-mid">';
				return;
			}
			var btn = `<li class="nav-item">
		        <a class="nav-link" href="#${text.toLowerCase().replace(/\w+/, '_')}">${text}</a>
		      </li>`;
			buttonsHtml += btn;
		    allButtons += btn;
		});

		allButtons += `<div class="icons">
		<a href="https://www.instagram.com/liyusoftwaresolutions"><svg class="icon-svg icon-fb"><path /></svg></a>
		<a href="https://www.instagram.com/liyusoftwaresolutions"><svg class="icon-svg icon-insta"><path /></svg></a>
		<a href="https://twitter.com/liyusoftwaresolutions"><svg class="icon-svg icon-twitter"><path /></svg></a>
		<a href="https://www.linkedin.com/in/liyusoftwaresolutions"><svg class="icon-svg icon-lin"><path /></svg></a>
	</div>`;

		buttonsHtml += '</ul>';
		allButtons += '</ul>';

		nav.append(buttonsHtml);
		nav.append(allButtons);

	}
}

export default NavBar;