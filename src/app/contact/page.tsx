import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-primary min-h-screen flex">
        <form
          action=""
          onsubmut="return validateForm()"
          method="post"
          className="bg-secondary flex flex-col m-auto p-10 rounded-lg shadow-lg"
        >
          <h2 className="text-accent-primary text-4xl font-bold">Contact Me</h2>
          <div className="flex flex-col my-4">
            <label htmlFor="name" className="text-font font-bold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="email" className="text-font font-bold">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="message" className="text-font font-bold">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              className="mt-1 p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent-primary background-primary font-bold py-2 px-4 my-4 rounded-full"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
