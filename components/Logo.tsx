Content: ```
import logo from "./logo.svg";

const Logo = ({ override }: { override?: any }) => {
  return (
    <div>
      <img src={logo.src} style={override} className="w-4 h-4" />
    </div>
  );
};

export default Logo;
```