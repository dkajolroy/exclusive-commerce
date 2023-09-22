function ViewMore({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="text-white bg-primary rounded hover:brightness-90 transition-all font-medium text-sm px-10 py-4 focus:outline-none "
      >
        {title}
      </button>
    </div>
  );
}

export default ViewMore;
