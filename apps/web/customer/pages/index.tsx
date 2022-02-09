import { Button } from '@hepsikredili/web/shared/ui';
import { FC } from 'react';

export const Index: FC = () => (
  <div className="container p-20 mx-auto">
    <div>
      <Button title="Submit" variant="contained" />
    </div>
    <div>
      <Button title="Submit" variant="flat" />
    </div>
    <div>
      <Button title="Submit" variant="outlined" />
    </div>
  </div>
);

export default Index;
