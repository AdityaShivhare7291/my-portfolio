import { Badge, Button, Card, Group, Image, Indicator, Text, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";
const ProjectCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const badge=useMatches({
        xsm:"sm", md:"md", lg:"lg"
    });
    return <div className="project-card-shell" data-aos="fade-up" data-aos-duration="800"><Card onClick={open}  className="!bg-[#0d1914] cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_18px_1px_#64FFDA55] xs-mx:!shadow-[0_0_10px_1px_#64FFDA60] !border-primaryColor/35 border-2 !rounded-[24px] !h-full"  shadow="lg" padding="sm" radius="lg" withBorder>
        <Card.Section className="p-3">
            <Image
                className="project-image !rounded-xl !shadow-[0_0_10px_0_#64FFDA33]"
                src={`${process.env.PUBLIC_URL}/${props.image}`}
                alt={props.image}
            />
        </Card.Section>

        <div className="mb-2 text-xs uppercase tracking-[0.28em] text-primaryColor">project://node</div>
        <Group justify="space-between" mt="xs" mb="xs">
            <div className="!text-2xl gap-2 !font-bold !text-white flex items-center sm-mx:!text-xl" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{props.title}{props.live === true && <Badge className="!px-1" variant="outline" color="red" rightSection={<Indicator className="!mr-0.5 !z-0" color="red" position="middle-end" size={7} processing></Indicator>} >Live</Badge>}</div>

        </Group>
        <Group mb="sm" className="!gap-2">
            {props.technologies.map((tech: string, index: number) => index < 3 && <Badge key={index} size={badge} variant="light" color="#64FFDA" className="!bg-primaryColor/10 !text-primaryColor">{tech}</Badge>)}
        </Group>
        <Text className="terminal-copy !text-justify !text-sm xs-mx:!text-xs" lineClamp={5} size="sm" c="dimmed">
            {props.desc}
        </Text>

        <Button onClick={open} className="!border-primaryColor/50 !bg-[#12211b] hover:!bg-[#162a21]" color="#64FFDA" variant="outline" mt="md" radius="md">
            cat project-details.json
        </Button>
    </Card>
        <FullProjectModal opened={opened} close={close} title={props.title} desc={props.desc} image={props.image} live={props.live} link={props.link} github={props.github} technologies={props.technologies} />
    </div>

}
export default ProjectCard;
