import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Columns3,
  Users,
  Activity,
  Bell,
  Settings,
} from "lucide-react";
import '../../styles/Sidebar.css';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">P</div>
        <span>Project Hub</span>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <p className="nav-section-title">WORKSPACE</p>

          <NavLink to='/' className="nav-item">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to='/projects' className="nav-item">
            <FolderKanban size={20} />
            <span>Projects</span>
          </NavLink>

          <NavLink to='/tasks' className="nav-item">
            <CheckSquare size={20} />
            <span>Tasks</span>
          </NavLink>

          <NavLink to='/kanban' className="nav-item">
            <Columns3 size={20} />
            <span>Kanban</span>
          </NavLink>

          <NavLink to='/team' className="nav-item">
            <Users size={20} />
            <span>Team</span>
          </NavLink>

          <NavLink to='/activity' className="nav-item">
            <Activity size={20} />
            <span>Activity</span>
          </NavLink>

          <NavLink to='/notification' className="nav-item">
            <Bell size={20} />
            <span>Notifications</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <p className="nav-section-title">GENERAL</p>

          <button className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </nav>

      <div className="sidebar-user">
        <div className="user-avatar">A</div>

        <div className="user-info">
          <strong>Arun</strong>
          <span>Developer</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;