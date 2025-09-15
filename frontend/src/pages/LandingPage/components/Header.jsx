import { Briefcase } from 'lucide-react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const isAuthenticated = true;
    const user = {fullName: "Otega Otite", role: "employer"};
    const navigate = useNavigate()

  return (
    <header className="">
        <div className="">
            <div className="">
                {/* Logo */}
                <div className="">
                    <Briefcase className="" />
                </div>
                <span className="">JobPortal</span>
            </div>
            
            {/* Navigation Links - Hidden on mobile */}
            <nav className="">
                <a
                    onClick={() => navigate("/find-jobs")}
                    className=""
                >
                    Find Jobs
                </a>
                <a
                    onClick={() => {
                        navigate(
                            isAuthenticated && user?.role === "employer"
                                ? "/employer-dashboard"
                                : "/login"
                        );
                    }}
                    className=""
                >
                    For Employers
                </a>
            </nav>

            {/* Auth Buttons */}
            <div className="">
                {isAuthenticated ? (
                    <div className="">
                        <span className="">Welcome, {user?.fullName}</span>
                        <a
                            href={user?.role === "employer"
                                ? "/employer-dashboard"
                                : "/find-job" 
                            }
                            className=""
                        >
                            Dashboard
                        </a>
                    </div>
                ) : (
                    <>
                        <a
                            href="/login"
                            className=""
                        >
                            Login
                        </a>
                        <a
                            href="/signup"
                            className=""
                        >
                            Sign up
                        </a>
                    </>
                )
            }
            </div>
        </div>
    </header>
  );
};

export default memo(Header);