function Cards({name="user", btnText="View Profile", descriptionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}) {
  // console.log("props:", props)
  return (
    <>
      <div class="relative h-[400px] w-[400px] rounded-md">
        <img
          src="https://plus.unsplash.com/premium_photo-1746637011338-7c7e45d4da20?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">{name}</h1>
          <p class="mt-2 text-sm text-gray-300">
            {descriptionText}
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;