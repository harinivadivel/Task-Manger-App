export default function FilterSort({ filter, setFilter, sort, setSort }) {
    return (
        <div className="flex justify-between items-center mb-4 gap-2">
            <select className="p-2 rounded border" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <select className="p-2 rounded border" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="None">No Sort</option>
                <option value="Date">Sort by Date</option>
                <option value="Priority">Sort by Priority</option>
            </select>
        </div>
    );
}