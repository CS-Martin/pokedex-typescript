import { ProgressAfter } from '@/components/ui/progress';
import { Pokemon } from '@/types/pokemon';
import { useEffect, useState } from 'react';

type PokemonStatsProps = Partial<Pick<Pokemon, 'stats'>>;

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }): JSX.Element => {
    const StatsTitle = ['HEALTH', 'ATTACK', 'DEFENSE', 'SPECIAL ATTACK', 'SPECIAL DEFENSE', 'SPEED'];

    return (
        <div className="flex flex-col gap-y-3">
            {stats &&
                Array.isArray(stats) &&
                stats.map((stat, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            {StatsTitle[index]}
                            <p>{stat.base}/255</p>
                        </div>
                        <div>
                            <StatsProgressBar base={stat.base} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

type StatsProgressBarProps = {
    base: number;
};

const StatsProgressBar: React.FC<StatsProgressBarProps> = ({ base }) => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(base), 1000);
        return () => clearTimeout(timer);
    }, [base]);

    return <ProgressAfter max={255} value={progress} />;
};

export default PokemonStats;
