import Header from "../components/Header";
import Section from "../components/Section";

const HomeLayout = ({ children }) => {
  return <div>
    <Header />
    {children}
  </div>;
}

export default HomeLayout;