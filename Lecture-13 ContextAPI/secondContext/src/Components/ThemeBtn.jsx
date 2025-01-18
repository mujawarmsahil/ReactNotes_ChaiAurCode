import useTheme from "../contexts/theme";

export default function ThemeBtn() {
    const {theme,darkSwitcher,lightSwitcher} = useTheme();
    const onChangeBtn = (e) =>{ // This function check the current value of checkbox and toggle the theme state of app as per the status of input .If its checked then theme state is set as light else as dark , And as we know the useEffect will run whenever the dependencies are changed henceforth the html class is toggled
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus)
        {
            darkSwitcher();
        } else {
            lightSwitcher()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn} // whenever we toggle the checkbox then the value of theme changed as per status
                checked={theme === "dark"} // checked value will be depend on theme
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}