type PillProps = {
    label: string;
};

const Pill = ({ label }: PillProps) => (
    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-blue-500 hover:text-white cursor-pointer transition">
        {label}
    </span>
);

export default Pill;
