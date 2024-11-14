
interface ContainerProps {
    children: React.ReactNode
}
const Container = ({ children }: ContainerProps) => {
    return (
        <div className="mx-auto max-w-7xl sm:w-full p-4">
            {children}
        </div>
    )
}

export default Container;