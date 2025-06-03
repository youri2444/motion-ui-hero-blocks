
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <img 
                src="/lovable-uploads/2cdc020e-ab14-4ec0-a769-5b59d70f4b46.png" 
                alt="Youri Stolper Logo"
                className="h-10 w-auto"
            />
            <span className="text-lg font-semibold">Youri Stolper</span>
        </div>
    )
}
