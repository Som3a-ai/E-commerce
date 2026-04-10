import { Button } from "@/components/ui/button";
import freshCartIcon from "../../../../public/FreshCart Logo.png"
import { FaMagnifyingGlass } from "react-icons/fa6";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

export function SheetDemo() {
  return (
    <Sheet>

      <SheetTrigger asChild>
        <button className="lg:hidden ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors cursor-pointer">
          <FaBars className="text-white " />
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className={`border-b border-gray-100 p-4`}>
            <Image src={freshCartIcon} alt='logo'/>
          </SheetTitle>
          <SheetDescription>
            <form className="p-4 border-b border-gray-100">
                                        <div class="relative">
                                            <input type="text" placeholder="Search products..." className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-sm"/>
                                            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center">
                                            <FaMagnifyingGlass className="text-white"/>
                                            </button>
                                        </div>
            </form>
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <label htmlFor="sheet-demo-name">Name</label>
            <input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <label htmlFor="sheet-demo-username">Username</label>
            <input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
