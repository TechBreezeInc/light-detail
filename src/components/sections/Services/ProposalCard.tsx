type ProposalCardProps = {
  title: string;
  img: string;
  subTitle: string;
  description: string;
};

export const ProposalCard = (props: ProposalCardProps) => {
  return (
    <div class="flex flex-col flex-1 shadow-md rounded-md overflow-hidden bg-gray-100">
      <div class="aspect-square relative p-6">
        <img
          src={props.img}
          alt={props.title}
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
        <h3 class="relative text-3xl">{props.title}</h3>
      </div>
      <div class="flex flex-col gap-3 relative  p-6">
        <p>{props.subTitle}</p>
        <p class="text-gray-500">{props.description}</p>
      </div>
    </div>
  );
};
