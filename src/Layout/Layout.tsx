import Navigation from "../Components/Navigation";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
