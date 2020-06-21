import { Pipe, PipeTransform } from "@angular/core";
import { INotesModel } from '../_models/notes.model';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
    transform(notesList: INotesModel[], searchText?: string): any {
        if (!searchText)
            return notesList;
        return notesList.filter(
            item => item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        );
    }
}