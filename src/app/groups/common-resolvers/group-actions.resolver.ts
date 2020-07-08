/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { GroupsService } from '../groups.service';

/**
 * Group Actions data resolver.
 */
@Injectable()
export class GroupActionsResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} groupsService Savings service.
   */
  constructor(private groupsService: GroupsService) { }

  /**
   * Returns the Savings account actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('name');
    const groupId = route.paramMap.get('groupId') || route.parent.parent.paramMap.get('groupId');
    switch (actionName) {
      case 'Assign Staff':
        return this.groupsService.getGroupData(groupId, 'true');
      default:
        return undefined;
    }
  }

}