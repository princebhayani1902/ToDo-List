function Form({ title, handleSubmit, handleChange, formData }) {
    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label
                        htmlFor="task"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Task:
                    </label>
                    <input
                        type="text"
                        id="task"
                        required
                        minLength="5"
                        maxLength="25"
                        onChange={handleChange}
                        value={formData.task}
                        placeholder="Enter a Task"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="space-y-1">
                    <label
                        htmlFor="description"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Description:
                    </label>
                    <textarea
                        id="description"
                        required
                        onChange={handleChange}
                        value={formData.description}
                        placeholder="Enter a Description"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="space-y-1">
                    <label
                        htmlFor="dueDate"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Due Date:
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        required
                        onChange={handleChange}
                        value={formData.dueDate}
                        pattern="\d{4}-\d{2}-\d{2}"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="space-y-1">
                    <label
                        htmlFor="todoStatus"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Status:
                    </label>
                    <select
                        name="status"
                        id="todoStatus"
                        required
                        onChange={handleChange}
                        value={formData.todoStatus}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="pending">pending</option>
                        <option value="in-progress">in-progress</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
                <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {title === "Update ToDo" ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
}

export default Form;
