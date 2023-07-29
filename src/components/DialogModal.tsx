import IconClose from '@/icons/IconClose';
import IconDividerVertical from '@/icons/IconDividerVertical';
import * as Dialog from '@radix-ui/react-dialog';

interface DialogModalProps {
    title: string
    content: React.ReactNode
}

export default function DialogModal({title, content}: DialogModalProps){

    const handleClickContent = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
      };

    return(
        <Dialog.Content onClick={handleClickContent} className="p-6 translate-x-[-50%] translate-y-[-50%] fixed top-[50%] left-[50%] sm:w-[60vw] sm:h-[60vh] w-[90vw] h-[90vh] bg-white rounded-xl overflow-y-scroll">
            <div className="flex justify-between">
            <Dialog.Title className="text-3xl font-bold text-[#3A3A3A] flex items-center"><IconDividerVertical /> {title}</Dialog.Title>
            <Dialog.Close><button><IconClose width={24} height={24} color='#3A3A3A' /></button></Dialog.Close>
            </div>
            {content}
        </Dialog.Content>
    )
}