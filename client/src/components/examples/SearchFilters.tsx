import SearchFilters from '../SearchFilters';
import { Card, CardContent } from '@/components/ui/card';

export default function SearchFiltersExample() {
  return (
    <div className="max-w-sm p-4">
      <Card>
        <CardContent className="p-4">
          <SearchFilters type="rentals" />
        </CardContent>
      </Card>
    </div>
  );
}
