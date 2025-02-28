
import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";

export function UploadWidget(){
    return (
        <div className="w-full bg-zinc-900 overflow-hidden max-w-[360px] rounded-xl shadow-shape">
            <UploadWidgetHeader />
            <div className="flex flex-col gap-4 py-3">
                <UploadWidgetDropzone />
                <div className="h-px bg-zinc-800 border-t border-black/2 box-content" />
                <UploadWidgetDropzone />

            </div>
        </div>
    )
}