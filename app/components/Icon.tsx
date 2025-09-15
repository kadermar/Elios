interface IconProps {
  size?: "xs" | "sm" | "regular";
  type?:
    | "arrow" | "circle"
    | "chevron-down" | "chevron-up" | "chevron-right"
    | "check" | "globe-03" | "star-06" | "data" | "help"
    | "codepen" | "cube-02" | "plus" | "close-x"
    | "message-chat-square" | "menu-02" | "users-02" | "search-md"
    | "download-01" | "briefcase-02" | "cube-outline" | "infinity"
    | "chip-01" | "virus" | "tool" | "sun" | "scale" | "bank-note-03"
    | "laptop-01" | "heart-hand" | "message-chat-circle" | "send-01"
    | "code" | "cloud-download" | "shield-check" | "network" | "cog"
    | "facebook" | "twitter-x" | "instagram" | "linkedin" | "youtube";
  className?: string;
  color?: string;
}

// Helper function to convert hex colors to CSS filter values
function getColorFilter(hexColor: string): string {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Convert RGB to HSL for better filter approximation
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const diff = max - min;

  let hue = 0;
  if (diff !== 0) {
    if (max === rNorm) {
      hue = ((gNorm - bNorm) / diff) % 6;
    } else if (max === gNorm) {
      hue = (bNorm - rNorm) / diff + 2;
    } else {
      hue = (rNorm - gNorm) / diff + 4;
    }
  }
  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;

  const lightness = (max + min) / 2;
  const saturation = diff === 0 ? 0 : diff / (1 - Math.abs(2 * lightness - 1));

  return `hue-rotate(${hue}deg) saturate(${Math.round(saturation * 100)}%) brightness(${Math.round(lightness * 100)}%)`;
}

export default function Icon({ size = "regular", type = "arrow", className = "", color = "#fb5d0b" }: IconProps) {
  const sizeMap = {
    xs: { width: 12, height: 12 },
    sm: { width: 14, height: 14 },
    regular: { width: 16, height: 16 }
  };

  const iconSize = sizeMap[size];

  // For Figma downloaded icons, use direct SVG file import
  const figmaIcons = [
    "chevron-down", "chevron-up", "chevron-right", "check", "globe-03", "star-06",
    "data", "codepen", "cube-02", "plus", "close-x", "message-chat-square",
    "menu-02", "users-02", "search-md", "download-01", "briefcase-02", "cube-outline",
    "infinity", "chip-01", "virus", "tool", "sun", "scale", "bank-note-03",
    "laptop-01", "heart-hand", "message-chat-circle", "send-01", "code",
    "cloud-download", "shield-check", "network", "cog"
  ];

  if (figmaIcons.includes(type)) {
    const iconPath = `/icons/${type}-outl.svg`;
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <img
          src={iconPath}
          alt={type}
          width={iconSize.width}
          height={iconSize.height}
          style={{
            filter: color === "#ffffff" || color === "white"
              ? "brightness(0) saturate(100%) invert(1)"
              : color !== "#fb5d0b"
                ? `brightness(0) saturate(100%) ${getColorFilter(color)}`
                : undefined,
            width: iconSize.width,
            height: iconSize.height
          }}
        />
      </div>
    );
  }

  // Original icons
  if (type === "circle") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="2" fill="#fb5d0b"/>
        </svg>
      </div>
    );
  }

  // Chevron icons
  if (type === "chevron-down") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 14 6" fill="none">
          <path d="M1 1L7 5L13 1" stroke="#fb5d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "chevron-up") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 14 6" fill="none">
          <path d="M13 5L7 1L1 5" stroke="#fb5d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "chevron-right") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 14 6" fill="none">
          <path d="M13 5L7 1L1 5" stroke="#fb5d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  // Basic UI icons
  if (type === "check") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 18 13" fill="none">
          <path d="M17 1L6 12L1 7" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "plus") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 16 16" fill="none">
          <path d="M8 1V15M1 8H15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "close-x") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 12 12" fill="none">
          <path d="M11 1L1 11M1 1L11 11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "search-md") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 20 20" fill="none">
          <path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "menu-02") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 20 14" fill="none">
          <path d="M1 7H13M1 1H19M1 13H19" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  // Communication icons
  if (type === "message-chat-square") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 22" fill="none">
          <path d="M9 14L5.92474 17.1137C5.49579 17.548 5.28131 17.7652 5.09695 17.7805C4.93701 17.7938 4.78042 17.7295 4.67596 17.6076C4.55556 17.4672 4.55556 17.162 4.55556 16.5515V14.9916C4.55556 14.444 4.10707 14.0477 3.5652 13.9683C2.25374 13.7762 1.22378 12.7463 1.03168 11.4348C1 11.2186 1 10.9605 1 10.4444V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H13.2C14.8802 1 15.7202 1 16.362 1.32698C16.9265 1.6146 17.3854 2.07354 17.673 2.63803C18 3.27976 18 4.11984 18 5.8V10M18 21L15.8236 19.4869C15.5177 19.2742 15.3647 19.1678 15.1982 19.0924C15.0504 19.0255 14.8951 18.9768 14.7356 18.9474C14.5558 18.9143 14.3695 18.9143 13.9969 18.9143H12.2C11.0799 18.9143 10.5198 18.9143 10.092 18.6963C9.7157 18.5046 9.4097 18.1986 9.218 17.8223C9 17.3944 9 16.8344 9 15.7143V13.2C9 12.0799 9 11.5198 9.218 11.092C9.4097 10.7157 9.7157 10.4097 10.092 10.218C10.5198 10 11.0799 10 12.2 10H17.8C18.9201 10 19.4802 10 19.908 10.218C20.2843 10.4097 20.5903 10.7157 20.782 11.092C21 11.5198 21 12.0799 21 13.2V15.9143C21 16.8462 21 17.3121 20.8478 17.6797C20.6448 18.1697 20.2554 18.5591 19.7654 18.762C19.3978 18.9143 18.9319 18.9143 18 18.9143V21Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "message-chat-circle") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 23 22" fill="none">
          <path d="M5.09436 10.2288C5.03221 9.8282 4.99996 9.4179 4.99996 9C4.99996 4.58172 8.60525 1 13.0526 1C17.4999 1 21.1052 4.58172 21.1052 9C21.1052 9.9981 20.9213 10.9535 20.5852 11.8345C20.5154 12.0175 20.4804 12.109 20.4646 12.1804C20.4489 12.2512 20.4428 12.301 20.4411 12.3735C20.4394 12.4466 20.4493 12.5272 20.4692 12.6883L20.8717 15.9585C20.9153 16.3125 20.9371 16.4895 20.8782 16.6182C20.8266 16.731 20.735 16.8205 20.6211 16.8695C20.4911 16.9254 20.3146 16.8995 19.9617 16.8478L16.7765 16.3809C16.6101 16.3565 16.527 16.3443 16.4512 16.3448C16.3763 16.3452 16.3245 16.3507 16.2511 16.3661C16.177 16.3817 16.0823 16.4172 15.893 16.4881C15.0097 16.819 14.0524 17 13.0526 17C12.6344 17 12.2237 16.9683 11.8227 16.9073M6.63158 21C9.5965 21 12 18.5376 12 15.5C12 12.4624 9.5965 10 6.63158 10C3.66668 10 1.26316 12.4624 1.26316 15.5C1.26316 16.1106 1.36028 16.6979 1.53955 17.2467C1.61533 17.4787 1.65322 17.5947 1.66566 17.6739C1.67864 17.7567 1.68091 17.8031 1.67608 17.8867C1.67145 17.9668 1.65141 18.0573 1.61134 18.2383L1 21L3.9948 20.591C4.15827 20.5687 4.24 20.5575 4.31137 20.558C4.38652 20.5585 4.42641 20.5626 4.50011 20.5773C4.5701 20.5912 4.67416 20.6279 4.88227 20.7014C5.43059 20.8949 6.01911 21 6.63158 21Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "send-01") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 22" fill="none">
          <path d="M9.12255 12.1096L19.6225 1.60955M9.25015 12.4376L11.8782 19.1956C12.1097 19.791 12.2255 20.0886 12.3923 20.1755C12.5369 20.2509 12.7092 20.251 12.8538 20.1758C13.0207 20.0891 13.1369 19.7916 13.3691 19.1965L19.9594 2.30875C20.1691 1.77157 20.2739 1.50298 20.2165 1.33135C20.1667 1.1823 20.0498 1.06533 19.9007 1.01554C19.7291 0.958206 19.4605 1.06302 18.9233 1.27265L2.03563 7.86299C1.44055 8.09522 1.14302 8.21133 1.05631 8.37823C0.981136 8.52292 0.981236 8.6952 1.05658 8.8398C1.14348 9.0066 1.44116 9.1223 2.0365 9.3539L8.79455 11.982C8.91535 12.029 8.97575 12.0525 9.02665 12.0888C9.07175 12.1209 9.11115 12.1604 9.14335 12.2055C9.17965 12.2563 9.20315 12.3168 9.25015 12.4376Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  // Business and utility icons
  if (type === "users-02") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 19" fill="none">
          <path d="M15 1.46776C16.4817 2.20411 17.5 3.73314 17.5 5.5C17.5 7.26686 16.4817 8.7959 15 9.5322M17 14.7664C18.5115 15.4503 19.8725 16.565 21 18M1 18C2.94649 15.5226 5.58918 14 8.5 14C11.4108 14 14.0535 15.5226 16 18M13 5.5C13 7.98528 10.9853 10 8.5 10C6.01472 10 4 7.98528 4 5.5C4 3.01472 6.01472 1 8.5 1C10.9853 1 13 3.01472 13 5.5Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "briefcase-02") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 20" fill="none">
          <path d="M7 19V5C7 4.07003 7 3.60504 7.10222 3.22354C7.37962 2.18827 8.18827 1.37962 9.2235 1.10222C9.605 1 10.07 1 11 1C11.93 1 12.395 1 12.7765 1.10222C13.8117 1.37962 14.6204 2.18827 14.8978 3.22354C15 3.60504 15 4.07003 15 5V19M4.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H4.2C3.07989 5 2.51984 5 2.09202 5.21799C1.71569 5.40973 1.40973 5.71569 1.21799 6.09202C1 6.51984 1 7.07989 1 8.2V15.8C1 16.9201 1 17.4802 1.21799 17.908C1.40973 18.2843 1.71569 18.5903 2.09202 18.782C2.51984 19 3.0799 19 4.2 19Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "download-01") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 20 20" fill="none">
          <path d="M19 13V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V13M15 8L10 13M10 13L5 8M10 13V1" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "help") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 22" fill="none">
          <path d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.4 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  // Social media icons
  if (type === "facebook") {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ minWidth: iconSize.width, minHeight: iconSize.height }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '20px', maxHeight: '20px' }}>
          <path d="M12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12C24 5.37264 18.6274 0 12 0Z" fill={color}/>
        </svg>
      </div>
    );
  }

  if (type === "twitter-x") {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ minWidth: iconSize.width, minHeight: iconSize.height }}>
        <svg width="100%" height="100%" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '20px', maxHeight: '20px' }}>
          <path d="M17.3263 0H20.6998L13.3297 8.42349L22 19.886H15.2112L9.89404 12.934L3.80995 19.886H0.434432L8.31743 10.8761L0 0H6.96111L11.7674 6.35433L17.3263 0ZM16.1423 17.8668H18.0116L5.94539 1.91313H3.93946L16.1423 17.8668Z" fill={color}/>
        </svg>
      </div>
    );
  }

  if (type === "instagram") {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ minWidth: iconSize.width, minHeight: iconSize.height }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '20px', maxHeight: '20px' }}>
          <path d="M12 0C15.2578 0 15.6658 0.0142578 16.9502 0.0751953C18.2251 0.131458 19.0973 0.337516 19.8613 0.632812C20.6487 0.937487 21.3188 1.3501 21.9844 2.01562C22.6547 2.68121 23.0621 3.35162 23.3574 4.14844C23.6527 4.90781 23.8598 5.78457 23.916 7.05957C23.9723 8.33909 23.9863 8.74725 23.9863 12.0049C23.9863 15.2625 23.9723 15.6705 23.916 16.9502C23.8598 18.2251 23.6527 19.0973 23.3574 19.8613C23.0528 20.6486 22.6401 21.3189 21.9746 21.9844C21.309 22.6499 20.639 23.0625 19.8516 23.3672C19.0922 23.6625 18.2154 23.8686 16.9404 23.9248C15.6609 23.981 15.2528 23.9951 11.9951 23.9951C8.73748 23.9951 8.32947 23.9811 7.0498 23.9248C5.77492 23.8685 4.90269 23.6625 4.13867 23.3672C3.35132 23.0625 2.68115 22.6499 2.01562 21.9844C1.34534 21.3188 0.9373 20.6486 0.62793 19.8564C0.332617 19.0971 0.126563 18.2203 0.0703125 16.9453C0.0140625 15.6656 0 15.2578 0 12C0 8.74219 0.0140625 8.33418 0.0703125 7.0498C0.126575 5.77491 0.332632 4.9027 0.62793 4.13867C0.937292 3.35129 1.34539 2.68117 2.01562 2.01562C2.68122 1.34534 3.35141 0.9373 4.14355 0.62793C4.90293 0.332617 5.77969 0.126563 7.05469 0.0703125C8.33437 0.0140625 8.74219 2.7444e-09 12 0ZM12 2.16113C8.79391 2.16113 8.41411 2.1752 7.15332 2.23145C5.98635 2.283 5.34863 2.47951 4.92676 2.64355C4.36903 2.85915 3.97063 3.1173 3.54883 3.53906C3.1317 3.95619 2.86893 4.3593 2.65332 4.91699C2.48927 5.33885 2.29181 5.97179 2.24023 7.14355C2.18399 8.40444 2.16992 8.78434 2.16992 11.9902C2.16992 15.1918 2.18398 15.5723 2.24023 16.8379C2.29182 18.0048 2.48928 18.6426 2.65332 19.0645C2.86891 19.6221 3.12705 20.0206 3.54883 20.4424C3.96591 20.8594 4.36908 21.1223 4.92676 21.3379C5.34863 21.5019 5.98172 21.6984 7.15332 21.75C8.4141 21.8062 8.79392 21.8203 12 21.8203C15.2014 21.8203 15.5812 21.8062 16.8467 21.75C18.0136 21.6984 18.6514 21.5019 19.0732 21.3379C19.6309 21.1223 20.0294 20.8641 20.4512 20.4424C20.8683 20.0253 21.1311 19.6221 21.3467 19.0645C21.5107 18.6426 21.7082 18.0095 21.7598 16.8379C21.816 15.577 21.8301 15.1965 21.8301 11.9902C21.8301 8.78903 21.816 8.40913 21.7598 7.14355C21.7082 5.97648 21.5107 5.33885 21.3467 4.91699C21.1311 4.3593 20.873 3.96088 20.4512 3.53906C20.0341 3.12199 19.631 2.85915 19.0732 2.64355C18.6514 2.47951 18.0183 2.283 16.8467 2.23145C15.5859 2.1752 15.2061 2.16113 12 2.16113ZM12 5.83594C15.4031 5.83594 18.1641 8.59688 18.1641 12C18.1641 15.4031 15.4031 18.1641 12 18.1641C8.59688 18.1641 5.83594 15.4031 5.83594 12C5.83594 8.59688 8.59688 5.83594 12 5.83594ZM12 8.00195C9.79219 8.00195 8.00195 9.79219 8.00195 12C8.00195 14.2078 9.79219 15.998 12 15.998C14.2078 15.998 15.998 14.2078 15.998 12C15.998 9.79219 14.2078 8.00195 12 8.00195ZM18.4082 4.15332C19.2001 4.15353 19.8465 4.7999 19.8467 5.5918C19.8467 6.38854 19.2002 7.03104 18.4082 7.03125C17.6113 7.03125 16.9688 6.38399 16.9688 5.5918C16.9689 4.79508 17.6161 4.15332 18.4082 4.15332Z" fill={color}/>
        </svg>
      </div>
    );
  }

  if (type === "linkedin") {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ minWidth: iconSize.width, minHeight: iconSize.height }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '20px', maxHeight: '20px' }}>
          <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill={color}/>
        </svg>
      </div>
    );
  }

  if (type === "youtube") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width="100%" height="100%" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.7609 3.64219C23.7609 3.64219 23.5266 1.9875 22.8047 1.26094C21.8906 0.304688 20.8688 0.3 20.4 0.24375C17.0438 -1.3411e-07 12.0047 0 12.0047 0H11.9953C11.9953 0 6.95625 -1.3411e-07 3.6 0.24375C3.13125 0.3 2.10938 0.304688 1.19531 1.26094C0.473438 1.9875 0.24375 3.64219 0.24375 3.64219C0.24375 3.64219 0 5.5875 0 7.52813V9.34687C0 11.2875 0.239062 13.2328 0.239062 13.2328C0.239062 13.2328 0.473437 14.8875 1.19062 15.6141C2.10469 16.5703 3.30469 16.5375 3.83906 16.6406C5.76094 16.8234 12 16.8797 12 16.8797C12 16.8797 17.0438 16.8703 20.4 16.6313C20.8688 16.575 21.8906 16.5703 22.8047 15.6141C23.5266 14.8875 23.7609 13.2328 23.7609 13.2328C23.7609 13.2328 24 11.2922 24 9.34687V7.52813C24 5.5875 23.7609 3.64219 23.7609 3.64219ZM9.52031 11.5547V4.80937L16.0031 8.19375L9.52031 11.5547Z" fill={color}/>
        </svg>
      </div>
    );
  }

  // Need to add the missing icons that are already implemented but not visible
  if (type === "laptop-01") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 18" fill="none">
          <path d="M1 14.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H16.2C17.8802 1 18.7202 1 19.362 1.32698C19.9265 1.6146 20.3854 2.07354 20.673 2.63803C21 3.27976 21 4.11984 21 5.8V14.2M3.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8C22 13.3598 22 13.1398 21.9101 12.9699C21.8315 12.8215 21.7085 12.6985 21.5601 12.6199C21.3902 12.53 21.1702 12.53 20.73 12.53H1.27C0.829785 12.53 0.609777 12.53 0.439895 12.6199C0.29145 12.6985 0.168492 12.8215 0.0898665 12.9699C2.11569e-08 13.1398 0 13.3598 0 13.8C0 14.9201 2.11569e-08 15.4802 0.21799 15.908C0.409734 16.2843 0.715695 16.5903 1.09202 16.782C1.51984 17 2.0799 17 3.2 17Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "heart-hand") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 20" fill="none">
          <path d="M19.73 4.73004C19.2225 4.22258 18.6071 3.82721 17.9264 3.57538C17.2458 3.32355 16.5141 3.22064 15.78 3.27004C14.78 3.34004 13.83 3.72004 13.05 4.35004L11 6.40004L8.95 4.35004C8.17 3.72004 7.22 3.34004 6.22 3.27004C5.48588 3.22064 4.75416 3.32355 4.07353 3.57538C3.3929 3.82721 2.77747 4.22258 2.27 4.73004C0.97 6.03004 0.97 8.16004 2.27 9.46004L11 18.19L19.73 9.46004C21.03 8.16004 21.03 6.03004 19.73 4.73004Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 22" fill="none">
          <path d="M8 17H14M8 17V13.5H6C4.89543 13.5 4 12.6046 4 11.5V9.5C4 8.39543 4.89543 7.5 6 7.5H8V5M8 17V19M14 17V13.5H16C17.1046 13.5 18 12.6046 18 11.5V9.5C18 8.39543 17.1046 7.5 16 7.5H14V5M14 17V19M14 5V3M8 5V3M11 7.5V13.5" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "cog") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 22" fill="none">
          <path d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.657 8.929L17.433 8.414C17.2811 8.11993 17.0508 7.87383 16.7684 7.70526C16.4859 7.53669 16.1624 7.45342 15.836 7.466L15.305 7.488C15.1336 7.49468 14.9625 7.46832 14.8016 7.41037C14.6408 7.35242 14.4934 7.26407 14.368 7.15L14.368 7.15C14.2426 7.03593 14.1412 6.89861 14.0693 6.74776C13.9974 6.59691 13.9563 6.43553 13.948 6.272L13.9 5.741C13.8807 5.41458 13.7623 5.10201 13.5593 4.84426C13.3562 4.5865 13.0787 4.39612 12.764 4.297L12.236 4.1C11.9219 3.99999 11.5781 3.99999 11.264 4.1L10.736 4.297C10.4213 4.39612 10.1438 4.5865 9.94073 4.84426C9.73766 5.10201 9.61929 5.41458 9.6 5.741L9.552 6.272C9.54368 6.43553 9.5026 6.59691 9.43068 6.74776C9.35876 6.89861 9.25744 7.03593 9.132 7.15C9.00659 7.26407 8.85923 7.35242 8.69838 7.41037C8.53754 7.46832 8.36641 7.49468 8.195 7.488L7.664 7.466C7.33756 7.45342 7.01406 7.53669 6.73163 7.70526C6.44919 7.87383 6.21888 8.11993 6.067 8.414L5.843 8.929C5.69099 9.22304 5.62903 9.55638 5.66544 9.88493C5.70185 10.2135 5.83515 10.5244 6.048 10.776L6.448 11.284C6.55735 11.4225 6.63627 11.5815 6.68029 11.7518C6.72431 11.9221 6.73248 12.1002 6.704 12.274V12.274C6.73248 12.4478 6.72431 12.6259 6.68029 12.7962C6.63627 12.9665 6.55735 13.1255 6.448 13.264L6.048 13.772C5.83515 14.0236 5.70185 14.3345 5.66544 14.6631C5.62903 14.9916 5.69099 15.325 5.843 15.619L6.067 16.133C6.21888 16.4281 6.44919 16.6742 6.73163 16.8427C7.01406 17.0113 7.33756 17.0946 7.664 17.082L8.195 17.06C8.36641 17.0533 8.53754 17.0797 8.69838 17.1376C8.85923 17.1956 9.00659 17.2839 9.132 17.398V17.398C9.25744 17.5121 9.35876 17.6494 9.43068 17.8002C9.5026 17.9511 9.54368 18.1125 9.552 18.276L9.6 18.807C9.61929 19.1334 9.73766 19.446 9.94073 19.7037C10.1438 19.9615 10.4213 20.1519 10.736 20.251L11.264 20.448C11.5781 20.548 11.9219 20.548 12.236 20.448L12.764 20.251C13.0787 20.1519 13.3562 19.9615 13.5593 19.7037C13.7623 19.446 13.8807 19.1334 13.9 18.807L13.948 18.276C13.9563 18.1125 13.9974 17.9511 14.0693 17.8002C14.1412 17.6494 14.2426 17.5121 14.368 17.398C14.4934 17.2839 14.6408 17.1956 14.8016 17.1376C14.9625 17.0797 15.1336 17.0533 15.305 17.06L15.836 17.082C16.1624 17.0946 16.4859 17.0113 16.7684 16.8427C17.0508 16.6742 17.2811 16.4281 17.433 16.133L17.657 15.619C17.809 15.325 17.871 14.9916 17.8346 14.6631C17.7982 14.3345 17.6649 14.0236 17.452 13.772L17.052 13.264C16.9426 13.1255 16.8637 12.9665 16.8197 12.7962C16.7757 12.6259 16.7675 12.4478 16.796 12.274C16.7675 12.1002 16.7757 11.9221 16.8197 11.7518C16.8637 11.5815 16.9426 11.4225 17.052 11.284L17.452 10.776C17.6649 10.5244 17.7982 10.2135 17.8346 9.88493C17.871 9.55638 17.809 9.22304 17.657 8.929Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "sun") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 22" fill="none">
          <path d="M11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 1V3M11 19V21M4.22 4.22L5.64 5.64M16.36 16.36L17.78 17.78M1 11H3M19 11H21M4.22 17.78L5.64 16.36M16.36 5.64L17.78 4.22" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "bank-note-03") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 22 16" fill="none">
          <path d="M1 4.6C1 3.53954 1 3.00931 1.21799 2.63803C1.40973 2.31569 1.71569 2.00973 2.03803 1.81799C2.40931 1.6 2.93954 1.6 4 1.6H18C19.0605 1.6 19.5907 1.6 19.962 1.81799C20.2843 2.00973 20.5903 2.31569 20.782 2.63803C21 3.00931 21 3.53954 21 4.6V11.4C21 12.4605 21 12.9907 20.782 13.362C20.5903 13.6843 20.2843 13.9903 19.962 14.182C19.5907 14.4 19.0605 14.4 18 14.4H4C2.93954 14.4 2.40931 14.4 2.03803 14.182C1.71569 13.9903 1.40973 13.6843 1.21799 13.362C1 12.9907 1 12.4605 1 11.4V4.6Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 8C14 9.10457 13.1046 10 12 10H10C8.89543 10 8 9.10457 8 8C8 6.89543 8.89543 6 10 6H12C13.1046 6 14 6.89543 14 8Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 6V6.4C18 6.96005 18 7.24008 17.891 7.45399C17.7951 7.64215 17.6422 7.79513 17.454 7.89101C17.2401 8 16.9601 8 16.4 8C15.0745 8 14 6.92548 14 5.6C14 5.03995 14 4.75992 14.109 4.54601C14.2049 4.35785 14.3578 4.20487 14.546 4.10899C14.7599 4 15.0399 4 15.6 4H18M4 10V10.4C4 10.9601 4 11.2401 4.10899 11.454C4.20487 11.6422 4.35785 11.7951 4.54601 11.891C4.75992 12 5.03995 12 5.6 12C6.92548 12 8 10.9255 8 9.6C8 9.03995 8 8.75992 7.89101 8.54601C7.79513 8.35785 7.64215 8.20487 7.45399 8.10899C7.24008 8 6.96005 8 6.4 8H4" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  if (type === "data") {
    return (
      <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
        <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 20 20" fill="none">
          <path d="M6 2L3 6V14L6 18H14L17 14V6L14 2H6Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 8V12" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 16H10.01" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  // Default arrow icon
  return (
    <div className={`shrink-0 ${className}`} style={{ width: iconSize.width, height: iconSize.height }}>
      <svg width={iconSize.width} height={iconSize.height} viewBox="0 0 16 16" fill="none">
        <path
          d="M3.33333 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}