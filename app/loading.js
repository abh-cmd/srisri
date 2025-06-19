export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
                <p className="mt-4 text-white text-lg">Loading...</p>
            </div>
        </div>
    );
} 