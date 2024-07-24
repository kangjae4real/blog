import React from "react";
import Block from "@/components/resume/block";
import { humanizeMilitaryIssue, ISSUES, Military } from "@/values/resume";
import { P } from "@/components/typography";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Keys } from "@/lib/types";

const IssueBlock: React.FC = () => {
  return (
    <Block title="특이사항">
      {ISSUES.map(({ description, military }, index) => (
        <React.Fragment key={index}>
          <P className="[&:not(:first-child)]:mt-0">{description}</P>
          {military && (
            <Table className="mt-2">
              <TableHeader>
                <TableRow key={index}>
                  {(Object.keys(military) as Keys<Military>).map((key, index) => (
                    <TableHead className="text-[12px] md:text-sm">{humanizeMilitaryIssue(key)}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key={index}>
                  {(Object.keys(military) as Keys<Military>).map((key, index) => (
                    <TableCell className="text-[12px] md:text-sm">{military[key]}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          )}
        </React.Fragment>
      ))}
    </Block>
  );
};

export default IssueBlock;
