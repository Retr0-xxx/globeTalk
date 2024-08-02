import { ModeToggle } from "@/components/theme-toggle";
import { SignedIn, UserButton } from "@clerk/nextjs";

const mainLayout = ({ children } : {children: React.ReactNode}) => {
    return ( 
        <div className="h-full">
            <div  className="md:flex w-full h-[60px] flex-row fixed inset-x-0 top-0 bg-blue-50 items-center">
                <div className="pl-5">
                    <SignedIn >
                        <UserButton />
                    </SignedIn> 
                </div>
                <div className="pl-5">
                     <ModeToggle /> 
                </div>
            </div>
            <div className="pt-[60px]">
                {children }
            </div>
        </div>
    );
}
 
export default mainLayout;