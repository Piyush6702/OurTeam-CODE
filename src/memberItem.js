import Member from "./member";
import Data from "./Data";

const Members = () => {
  return (
    <div>
      {Data.filter((dt)=> {
        if (dt.category === 'members') {
            return dt
        }
          
      }).map((dt) => (
        <Member
          name={dt.name}
          im={dt.image}
          post={dt.post}
          mail={dt.mail}
          fb_link={dt.fb_link}
          lnkdin_link={dt.lnkdin_link}
        />
      ))}
    </div>
  );
}; 

export default Members;