/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ElementType, ComponentPropsWithRef } from 'react';
import type { Breakpoint } from '../../types';

/** @public */
export type TextOwnProps = {
  as?: 'p' | 'span' | 'label';
  variant?:
    | 'subtitle'
    | 'body'
    | 'caption'
    | 'label'
    | Partial<Record<Breakpoint, 'subtitle' | 'body' | 'caption' | 'label'>>;
  weight?: 'regular' | 'bold' | Partial<Record<Breakpoint, 'regular' | 'bold'>>;
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | Partial<
        Record<
          Breakpoint,
          'primary' | 'secondary' | 'danger' | 'warning' | 'success'
        >
      >;
  truncate?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/** @public */
export type TextProps<T extends ElementType = 'p'> = TextOwnProps &
  Omit<ComponentPropsWithRef<T>, keyof TextOwnProps>;
