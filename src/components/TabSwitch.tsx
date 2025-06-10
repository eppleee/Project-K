interface TabSwitchProps {
    activeTab: "about" | "contact" | "projects";
}

const TabSwitch = ({ activeTab }: TabSwitchProps) => {
    return (
        <div className="mb-6 flex justify-center">
            <div className="flex rounded-md border border-gray-300">
                <a
                    href="/about"
                    className={`px-6 py-2 ${activeTab === "about"
                        ? "bg-yellow-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    About Me
                </a>
                <a
                    href="/contact"
                    className={`px-6 py-2 ${activeTab === "contact"
                        ? "bg-yellow-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    Contact
                </a>
                <a
                    href="/projects"
                    className={`px-6 py-2 ${activeTab === "projects"
                        ? "bg-yellow-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    Projects
                </a>
            </div>
        </div>
    );
};

export default TabSwitch;
