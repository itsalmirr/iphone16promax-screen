import { MessageCircle } from "lucide-react";

const Dock = () => {
    return (
        <div className='absolute bottom-4 left-4 right-4'>
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-4 flex items-center justify-center'>
                <div className='bg-gradient-to-br from-green-400 to-blue-500 p-3 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer'>
                    <MessageCircle className='w-8 h-8 text-white' />
                </div>
            </div>
        </div>
    )
};

export default Dock;
