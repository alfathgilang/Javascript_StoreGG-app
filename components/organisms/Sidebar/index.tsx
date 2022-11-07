import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}
export default function Sidebar(props: SidebarProps) {

  const {activeMenu} = props;
  return (
    <div className="content pt-50 pb-30 ps-30">
      <Profile />
      <div className="menus">
        <MenuItem title=" Overview" icon="ic-menu-overview" active={activeMenu === 'overview'} href="/member" />
        <MenuItem title=" Transactions" icon="ic-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
        <MenuItem title=" Messages" icon="ic-menu-message" />
        <MenuItem title=" Card" icon="ic-menu-card" />
        <MenuItem title=" Rewards" icon="ic-menu-reward" />
        <MenuItem title=" Settings" icon="ic-menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile" />
        <MenuItem title=" Log Out" icon="ic-menu-logout" href="/sign-in" />
      </div>
      <Footer />
    </div>
  );
}
