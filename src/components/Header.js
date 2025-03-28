export default function Header({ toggleDarkMode }) {
    return (
        <header className="flex justify-between p-4 bg-gray-800 text-white rounded-xl mb-4" >
            <h1 className="text-xl font-bold">Task Manager</h1>
            <button onClick={toggleDarkMode} className="bg-gray-600 px-3 py-1 rounded">Toggle Dark Mode</button>
        </header>
    );
}