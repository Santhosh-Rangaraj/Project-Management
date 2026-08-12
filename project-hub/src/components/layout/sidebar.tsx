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
import '../../styles/Sidebar.css'

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

          <button className="nav-item active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>

          <button className="nav-item">
            <FolderKanban size={20} />
            <span>Projects</span>
          </button>

          <button className="nav-item">
            <CheckSquare size={20} />
            <span>Tasks</span>
          </button>

          <button className="nav-item">
            <Columns3 size={20} />
            <span>Kanban</span>
          </button>

          <button className="nav-item">
            <Users size={20} />
            <span>Team</span>
          </button>

          <button className="nav-item">
            <Activity size={20} />
            <span>Activity</span>
          </button>

          <button className="nav-item">
            <Bell size={20} />
            <span>Notifications</span>
          </button>
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