import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PersonIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import CreateProjectForm from "../Project/CreateProjectForm";
import { logout } from "@/redux/Auth/Action";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="border-b  py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p onClick={()=>navigate("/")} className="cursor-pointer font-sans">Project Managment</p>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost" className="font-sans">New Project</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-sans">Create New Project</DialogTitle>
            </DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
        <Button onClick={()=>navigate("/upgrade_plan")} variant="ghost" className="font-sans">Upgrade</Button>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="rounded-full border-2 border-gray-600"
              variant="outline"
              size="icon"
            >
              <PersonIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout} className="font-sans cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
<p className="lg:block hidden font-sans">{auth.user?.fullName} </p>
        
      </div>
    </div>
  );
};

export default Navbar;
