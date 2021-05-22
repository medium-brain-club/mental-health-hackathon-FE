export function FeedIcon({ fill = "#4946E1", ...props }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 19C17.771 19 19.657 19 20.828 17.828C22 16.657 22 14.771 22 11C22 7.229 22 5.343 20.828 4.172C19.657 3 17.771 3 14 3H10C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11C2 14.771 2 16.657 3.172 17.828C3.825 18.482 4.7 18.771 6 18.898"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
      <path d="M12 11V11.5" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11V11.5" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 11V11.5" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M14 19C12.764 19 11.402 19.5 10.159 20.145C8.161 21.182 7.162 21.701 6.67 21.37C6.178 21.04 6.271 20.015 6.458 17.966L6.5 17.5"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
