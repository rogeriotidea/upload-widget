
import * as Collapsible from "@radix-ui/react-collapsible";
import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { useState } from "react";
import { UploadWidgetMinimizedButton } from "./upload-widget-minimized-button";
import { UploadWidgetUploadItem } from "./upload-widget-upload-item";
import { Upload } from "lucide-react";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";

export function UploadWidget(){

    const [isWidgetOpen, setIsWidgetOpen] = useState(false);    


    return ( 
        <Collapsible.Root onOpenChange={setIsWidgetOpen}>
            <div className="bg-zinc-900 overflow-hidden w-[360px] rounded-xl shadow-shape">
                {!isWidgetOpen && <UploadWidgetMinimizedButton />}
                <Collapsible.Content>
                    <UploadWidgetHeader />
                    <div className="h-[auto] flex flex-col gap-4 py-3">
                        <UploadWidgetDropzone />
                        <div className="h-2px bg-zinc-800 border-t border-black/2 box-content" />
                        <UploadWidgetUploadList />

                    </div>
                </Collapsible.Content>
            </div>
        </Collapsible.Root>
    )
}