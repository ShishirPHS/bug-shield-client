import "./QuestionAndAnswer.css";

const QuestionAndAnswer = () => {
  return (
    <div className="bg-[#F3F4F0] py-36">
      <div className="container mx-auto px-4 lg:px-0 mb-20 mt-20 grid grid-cols-12 gap-6">
        <div className="flex flex-col items-center lg:items-start col-span-12 lg:col-span-4">
          <h3 className="text-4xl w-[328px] font-semibold mb-5 text-center lg:text-left">
            Frequently asked questions
          </h3>
          <p className="text-blue-600">Contact us for more info</p>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="QA collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What pests do you treat?
            </div>
            <div className="collapse-content">
              <p>
                We offer comprehensive pest control services for a wide range of
                pests including ants, termites, bed bugs, rodents, mosquitoes,
                ticks, and more.
              </p>
            </div>
          </div>
          <div className="QA collapse collapse-arrow border-b-stone-400">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How long does it take for your pest control treatment to show
              results?
            </div>
            <div className="collapse-content">
              <p>
                The time taken for our pest control treatment to show noticeable
                reduction in pest activity typically ranges from one to two
                days, depending on the severity and type of treatment.
              </p>
            </div>
          </div>
          <div className="QA collapse collapse-arrow border-b-stone-400">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Why should I hire a professional pest control service instead of
              using DIY methods?
            </div>
            <div className="collapse-content">
              <p>
                Professional pest control is necessary because it requires
                expertise and strategy. DIY methods are often temporary and
                ineffective, while our services provide long-term solutions
                using EPA-approved and biodegradable materials, ensuring safety
                for kids and pets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
