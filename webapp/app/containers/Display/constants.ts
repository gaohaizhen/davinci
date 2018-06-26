/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

export enum ActionTypes {
  LOAD_DISPLAYS = 'davinci/Display/LOAD_DISPLAYS',
  LOAD_DISPLAYS_SUCCESS = 'davinci/Display/LOAD_DISPLAYS_SUCCESS',
  LOAD_DISPLAYS_FAILURE = 'davinci/Display/LOAD_DISPLAYS_FAILURE',

  ADD_DISPLAY = 'davinci/Display/ADD_DISPLAY',
  ADD_DISPLAY_SUCCESS = 'davinci/Display/ADD_DISPLAY_SUCCESS',
  ADD_DISPLAY_FAILURE = 'davinci/Display/ADD_DISPLAY_FAILURE',

  EDIT_DISPLAY = 'davinci/Display/EDIT_DISPLAY',
  EDIT_DISPLAY_SUCCESS = 'davinci/Display/EDIT_DISPLAY_SUCCESS',
  EDIT_DISPLAY_FAILURE = 'davinci/Display/EDIT_DISPLAY_FAILURE',

  EDIT_CURRENT_DISPLAY = 'davinci/Display/EDIT_CURRENT_DISPLAY',
  EDIT_CURRENT_DISPLAY_SUCCESS = 'davinci/Display/EDIT_CURRENT_DISPLAY_SUCCESS',
  EDIT_CURRENT_DISPLAY_FAILURE = 'davinci/Display/EDIT_CURRENT_DISPLAY_FAILURE',

  DELETE_DISPLAY = 'davinci/Display/DELETE_DISPLAY',
  DELETE_DISPLAY_SUCCESS = 'davinci/Display/DELETE_DISPLAY_SUCCESS',
  DELETE_DISPLAY_FAILURE = 'davinci/Display/DELETE_DISPLAY_FAILURE',

  LOAD_DISPLAY_DETAIL = 'davinci/Display/LOAD_DISPLAY_DETAIL',
  LOAD_DISPLAY_DETAIL_SUCCESS = 'davinci/Display/LOAD_DISPLAY_DETAIL_SUCCESS',
  LOAD_DISPLAY_DETAIL_FAILURE = 'davinci/Display/LOAD_DISPLAY_DETAIL_FAILURE',

  ADD_DISPLAY_LAYERS = 'davinci/Display/ADD_DISPLAY_LAYERS',
  ADD_DISPLAY_LAYERS_SUCCESS = 'davinci/Display/ADD_DISPLAY_LAYERS_SUCCESS',
  ADD_DISPLAY_LAYERS_FAILURE = 'davinci/Display/ADD_DISPLAY_LAYERS_FAILURE',

  EDIT_DISPLAY_LAYERS = 'davinci/Display/EDIT_DISPLAY_LAYERS',
  EDIT_DISPLAY_LAYERS_SUCCESS = 'davinci/Display/EDIT_DISPLAY_LAYERS_SUCCESS',
  EDIT_DISPLAY_LAYERS_FAILURE = 'davinci/Display/EDIT_DISPLAY_LAYERS_FAILURE',

  DELETE_DISPLAY_LAYERS = 'davinci/Display/DELETE_DISPLAY_LAYERS',
  DELETE_DISPLAY_LAYERS_SUCCESS = 'davinci/Display/DELETE_DISPLAY_LAYERS_SUCCESS',
  DELETE_DISPLAY_LAYERS_FAILURE = 'davinci/Display/DELETE_DISPLAY_LAYERS_FAILURE',

  SELECT_LAYER = 'davinci/Display/SELECT_LAYER'
}

export enum SecondaryGraphTypes {
  Rectangle = 'Rectangle',
  Label = 'Label'
}

export enum GraphTypes {
  Chart = 'Chart',
  Secondary = 'Secondary'
}
